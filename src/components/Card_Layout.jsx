import React, { useRef } from 'react';
import  {Component, useEffect, useState} from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import CardComponent from "./Card";

export default function Card_layout(){
    const [details, setDetails] = useState([])
    function getEvents() {
        axios.get("https://api.gyanibooks.com/library/get_dummy_notes/")
            .then(response => response.data)
            .then((data) => {
                setDetails(data)
            });
    }

    useEffect(()=>{
        getEvents();
        
    },[])

    return <div>
            
         {details.map(detail =>

            <CardComponent
              id={detail.id}
              user={detail.user}
              title={detail.title}
              category={detail.category}
              notes={detail.notes}
            />
   
        )}


    </div>;
};

