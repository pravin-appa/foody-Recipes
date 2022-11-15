import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';


function Recipe() {
    let params = useParams();

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instruction");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const dataDetails = await data.json();
        console.log(dataDetails);
        setDetails(dataDetails);

    };

    useEffect(() => {
        fetchDetails();
    },[params.name]);

  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt=" " />
        </div>
        <Info>
            <Button className={activeTab==="instruction" ? "active" : ""} onClick={() => setActiveTab("instruction")}>Instructions</Button>
            <Button className={activeTab==="ingredients" ? "active" : ""} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
          
          {activeTab==="instruction" && (
              <div>
              <h4 dangerouslySetInnerHTML={{__html : details.summary}}></h4>
              <h4 dangerouslySetInnerHTML={{__html : details.instructions}}></h4>
            </div>
          )}
            
          {activeTab==="ingredients" && (
             <ul>
             {details.extendedIngredients.map((ingredient) => (
                 <li key={ingredient.id}>
                     {ingredient.original}
                 </li>
             ))}
         </ul>
          )}  

            
            
        </Info>
        
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
 margin-top: 6rem;
 margin-bottom: 4rem;
 display:flex;

 .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
 }

 h2{
    margin-bottom: 1.5rem;
 }
 li{
    font-size: 1rem;
    line-height: 2rem;
 }
 ul{
    margin-top: 2rem;
 }
 img{
    border-radius: 2rem;
 }
`;

const Button = styled.button`
 padding: 1rem 2rem;
 color: #313131;
 background: white;
 border: 2px solid black;
 margin-right: 1.5rem;
 margin-bottom: 1rem;
 font-weight:600;
`;

const Info = styled.div`
  margin-left: 4rem;
`;
export default Recipe;
