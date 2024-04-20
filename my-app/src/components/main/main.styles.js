import styled from 'styled-components';


export const Container = styled.div`
width: 850px;
padding: 50px;
margin-left:200px;
margin-right:20px;
margin-top:2px;
padding:10px 10px;
background:#E8EAEE;
height :580px;
box-shadow: 5px 3px 8px rgba(0, 0, 0, 0.5);
border-radius:20px;
justify-content:center;
align-items:center;
`

export const H1 = styled.h1`
margin:0px;
padding-bottom:20px;
font-size: 40px;
font-weight:800;
text-align:left;

`


export const HR = styled.hr`

width: 75%; 
margin: 0 auto; 
border: none; 
height: 5px;
background-color: #000; 
`
export const ButtonContainer = styled.div`
display :flex;
flex-direction:coloumn;
gap:150px;
padding:8px;
margin:20px;
justify-content:center;
align-items:center;
`
export const Button1 = styled.button`
background-color: inherit;
  box-shadow: inset 6px 8px 5px rgba(0,0,0, 0.2);
  width:250px;
  height:80px;
  background:#E8EAEE;
  border:2px solid rgba(218,220,224) ;
  border-radius:16px;
  font-size:20px;
  font-weight:1000;

  
  `
export const Button2 = styled.button`
  background-color: inherit;
  box-shadow: -15px -8px 0px rgba(242, 243, 245, 0.3);
  width:250px;
  height:80px;
    background:#E8EAEE;
    border:.5px solid #CCCED2 ;
    border-radius:16px;
    font-size:20px;
    font-weight:1000;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:10px;
  
    
    `


export const OvalDiv = styled.div`
  width: 27px;
  height: 40px;
  background-color:#262628;
  border-radius: 50%;
  font-size:28px;
  font-weight:700;
  color:#808080;
`;

export const FooterContent = styled.div`
margin:0;
color:#8E8E8F;
font-weight:600;
font-size:19px;
text-align:left;
padding-down:10px;
`
