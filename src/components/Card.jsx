import React, { Component } from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  withStyles,
} from "@material-ui/core";

const styles = (theme) => ({
  card: {
    display: "block",
    margin: 5,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    borderRadius: 0,
  },

  caption: {
    textTransform: "uppercase",
  },

  title: {
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },

  media: {
    width: "auto",
    height: 300,
    [theme.breakpoints.up("sm")]: {
      width: 1500,
    },
    flexBasis: "50%",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "50%",
    backgroundColor: "#eee",
  },

  cardText: {
    flex: "1 0 auto",
    marginBottom: 15,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
    },
  },

  linkAction: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
});

export default function CardComponent(props) {
  const { classes, id, user, title, category, notes } = props;
  const [contentJson, setContentJson] = useState({});

  const handleClose = (notes) => {
    try {
      // const content_json =notes.replace("/\/g", "");
      let json = JSON.parse(notes);
      console.log(json);
      setContentJson({ ...json });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleClose(notes);
  }, []);

  return (
    <div style={{boxShadow: "0 2px 6px rgba(0,0,0,0.15)",padding:"16px",display:"flex",flexDirection:"column",width:'100%'}}>
      {/* {console.log("Res",contentJson)} */}
      <div  style={{display:"flex",flexDirection:"row",justifyContent:'space-between',backgroundColor:'#a7cad6',padding:"5px"}}>
      <div style={{width:'20%'}}>{id}</div>
      <div style={{width:'20%'}}>{user}</div>
      <div style={{width:'20%'}}>{title}</div>
      <div style={{width:'20%'}}>{category}</div>
      </div>
      
      {contentJson.content ? (
  <div>
    {contentJson.content.map((blockgroup) => (
      <div>
        {/* <h1>{blockgroup.type}</h1> */}
        {blockgroup.content ? (
          <div>
            {blockgroup.content.map((blockcontainer) => (
              <div style={blockcontainer.attrs}>
                {/* <h2>{blockcontainer.type}</h2> */}
                {blockcontainer.content?<div>
                    {blockcontainer.content.map((paragraph_heading)=>
                    
                    <div style={paragraph_heading.attrs}>
                        {/* <h4>{paragraph_heading.type}</h4> */}
                        {(paragraph_heading.type =='heading' && paragraph_heading.content) ?

                              <h6 style={paragraph_heading.attrs}>{paragraph_heading.content[0].text}</h6>:

                              (paragraph_heading.type == 'paragraph' && paragraph_heading.content)?

                              <p style={paragraph_heading.attrs}>{paragraph_heading.content[0].text}</p> : null


                        }
                    </div>)}
                </div>:null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    ))}
  </div>
) : (
  null
)}
      
    </div>
  );
}

// style{{box-shadow="";
//            border-radius:4px;
//            background-color:#fff;
//             padding:16px;
//             display:flex;
//             flex-direction"}


// {contentJson.content ? (
//   <div>
//     {contentJson.content.map((blockgroup) => (
//       <div>
//         <h1>{blockgroup.type}</h1>
//         {blockgroup.content ? (
//           <div>
//             {blockgroup.content.map((blockcontainer) => (
//               <div>
//                 <h2>{blockcontainer.type}</h2>
//                 {blockcontainer.content?<div>
//                     {blockcontainer.content.map((paragraph_heading)=>
                    
//                     <div>
//                         <h4>{paragraph_heading.type}</h4>
//                         {(paragraph_heading.type =='heading' && paragraph_heading.content) ?

//                               <h6>{paragraph_heading.content[0].text}</h6>:

//                               (paragraph_heading.type == 'paragraph' && paragraph_heading.content)?

//                               <p>{paragraph_heading.content[0].text}</p> : null


//                         }
//                     </div>)}
//                 </div>:null}
//               </div>
//             ))}
//           </div>
//         ) : null}
//       </div>
//     ))}
//   </div>
// ) : (
//   <h2>No</h2>
// )}