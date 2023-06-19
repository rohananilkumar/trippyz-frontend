import React ,{ useState } from "react"
import styles from "./Welcome.module.scss"
import DashboardLayout from "../components/layouts/DashboardLayout"
import Sidebar from "../components/ui/Sidebar"
import Title from "../components/ui/Title"
import PrimaryButton from "../components/ui/PrimaryButton"
import LabelledInput from "../components/ui/LabelledInput"

import Card from "../components/ui/Card";
import Mapview from "../components/ui/Mapview";
import Map from "../components/ui/Mapview";



const Details = () => {
  const [activeSet, setActiveSet] = useState(1);

  const handleNext = () => {
    setActiveSet(activeSet + 1);
  };

  const renderFields = (setNumber) => {
    if (setNumber === 1) {
      return (
        <div className={styles.dash}>
      
     <Sidebar />
     <DashboardLayout/>
     <Title 
    //  titlefirst={"Hello"} 
      titlesec={"Hola!"}
      tagLine={"Please select your preferred route configuration"}
      className={styles.welcome}/>
    
     
     

<div className={styles.buttons}>
    
     <PrimaryButton  
          label={"Lightly Planned Routes"}
          className={styles.smallbut}/>

     <PrimaryButton  
          label={"Tightly Planned Routes"}
          className={styles.smallbut}/>

      <PrimaryButton  
          label={"Normal Planned Routes"}
          className={styles.smallbut}/>
    
   



    <PrimaryButton  
          label={"I like to be surprised"}
          className={styles.next}
          onClick={handleNext}
          //to={"/dashboard"}
          
          />



    </div>

   </div>
      );
    }
    else if (setNumber === 2) {
      return (
        <div className={styles.dash}>
      <Sidebar />
      <DashboardLayout />
      <Title
        titlefirst={"Hello"}
        titlesec={"There!"}
        tagLine={"Lets collect some data to plan your route"}
      />

      <div className={styles.buttons}>
        <h8 className={styles.inquiry}>Where are you headed to?</h8>
       {/* <img src={dest} alt="destination" className={styles.dest} />*/}
        <LabelledInput
        //  onChange={(event) => setDestination(event.target.value)}
          className={styles.but}
        />

        <h8 className={styles.inquiry}>Where are you starting from?</h8>
       {/* <img src={start} alt="start" className={styles.start} />*/}
        <LabelledInput
        //  onChange={(event) => setStartingPoint(event.target.value)}
          className={styles.but}
        />

        <h8 className={styles.inquiry}>What is the duration of the trip?</h8>
        <LabelledInput
       //   onChange={(event) => setDuration(event.target.value)}
          className={styles.but}
        />

        <h8 className={styles.inquiry}>What is the radius coverage (km)?</h8>
        <LabelledInput
       //   onChange={(event) => setRadius(event.target.value)}
          className={styles.but}
        />

        <PrimaryButton
          label={"Next >"}
          className={styles.next}
          onClick={handleNext}
        />
        
      </div>
    </div>
      );
    }
    else if (setNumber === 3) {
      return (
        <div className={styles.dash}>
      
        <Sidebar />
        <DashboardLayout/>
        <Title 
         titlefirst={"Budget"} 
         titlesec={"Details!"}
         tagLine={"Lets talk money!"}
         className={styles.budget}/>
       
        
        
   
   <div className={styles.buttons}>
       <h8 className={styles.inquiry}>What is your total trip budget?</h8>
      {/* <img src={dollar} alt="dollar" className={styles.dollar}/>*/}
        <LabelledInput  
       
         onChange={(x) => {
         console.log(x);
        }}
        className={styles.but}/>
   
       <h8 className={styles.inquiry}>Number of people for the trip</h8>
      {/* <img src={user} alt="user" className={styles.user}/>*/}
       <LabelledInput 
             onChange={(x) => {
             console.log(x);
           }}
           className={styles.but}/>
       <h8 className={styles.inquiry}>What all should we add for the budget?</h8>
       
       
   
   
      
      
       <PrimaryButton  
             label={"Food Price"}
             className={styles.smallbut}/>
      
       <PrimaryButton  
             label={"Stay Price"}
             className={styles.smallbut}/>
   
   <PrimaryButton  
             label={"Ticket Price"}
             className={styles.smallbut}/>
      
       <PrimaryButton  
             label={"Petrol Budget"}
             className={styles.smallbut}/>
       
   
       <PrimaryButton  
             label={"Next >"}
             className={styles.next}
             onClick={handleNext}
            // to={"/parameters"}
             
             />
       </div>
   
      </div>


      );
    }
    else if (setNumber === 4) {
      return (
        <div className={styles.dash}>
        <Sidebar />
        <DashboardLayout />
        <Title
          //  titlefirst={"Hello"}
          titlesec={"Parameters"}
          tagLine={"Ok we need a bit more info"}
        />
  
        <div className={styles.buttons}>
          <h8 className={styles.inquiry}>What's your average mileage?</h8>
         {/* <img src={truck} alt="truck" className={styles.truck} />*/}
          <LabelledInput
            onChange={(x) => {
              console.log(x);
            }}
            className={styles.but}
          />
  
          <h8 className={styles.inquiry}>How much room for budget?(%)</h8>
          {/* <img src={percentage} alt="percentage" className={styles.percentage}/>*/}
          <LabelledInput
            onChange={(x) => {
              console.log(x);
            }}
            className={styles.but}
          />
  
          <h8 className={styles.inquiry}>Restaurant rating preferences</h8>
         {/* <img src={star} alt="star" className={styles.star} />*/}
          <LabelledInput
            //label={"What is the duration of the trip?"}
            onChange={(x) => {
              console.log(x);
            }}
            className={styles.but}
          />
  
          <PrimaryButton
            label={"See my routes! >"}
            className={styles.next}
            onClick={handleNext}
            
          />
        </div>
      </div>
      );
    }


    else if (setNumber === 5) {
      return (
        <div className={styles.dash}>
        <Sidebar />
        
       
        <Card
          className={styles.cardviewleft}
          title={"Route 3"}
          duration={"3 days, 12 hours"}
          expense={"2000"}
        />
  
        <div className={styles.mapone}>
          <Mapview className={styles.mapstyle} />
  
          <Card
            className={styles.cardview}
            title={"Route 2"}
            duration={"3 days, 12 hours"}
            expense={"2000"}
          />
        </div>
  
        <Title titlefirst={"Route"} titlesec={"Result!"} />
  
        {/*<DashboardLayout/>*/}
      </div>

      );
    }
    return null;
  };

return (
  <div>
    {renderFields(activeSet)}
    <button onClick={handleNext}>Next</button>
  </div>
);

};
export default Details;
