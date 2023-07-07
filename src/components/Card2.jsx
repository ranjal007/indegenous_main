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
    <div>
      {/* {console.log("Res",contentJson)} */}
      <h4>Id: {id}</h4>
      <h4>User:{user}</h4>
      <h4>Title: {title}</h4>
      <h4>Category: {category}</h4>
      {contentJson.content ? (
        <div>
          {contentJson.content.map((blockgroup) => (
            <div>
              <h1>{blockgroup.type}</h1>
              {blockgroup.content ? (
                <div>
                  {blockgroup.content.map((blockcontainer) => (
                    <div>
                      <h2>{blockcontainer.type}</h2>
                      {blockcontainer.content?<div>
                          {blockcontainer.content.map((paragraph_heading)=>
                          
                          <div>
                              <h4>{paragraph_heading.type}</h4>
                              {(paragraph_heading.type =='heading' && paragraph_heading.content) ?

                                    <h6>{paragraph_heading.content[0].text}</h6>:

                                    (paragraph_heading.type == 'paragraph' && paragraph_heading.content)?

                                    <p>{paragraph_heading.content[0].text}</p> : null


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
        <h2>No</h2>
      )}
    </div>
  );
}

// <div>
//     <h1>Inside Block Group</h1>
//     {final_note['content']? final_note['content'].map(content1=>
//         <div style={content1['attrs']}>
//         <h2>Inside Block Container</h2>
//         {content1['content']? content1['content'].map(content2=>

//             <div style={content2['attrs']}>
//                 <h2> Inside Paragraph/heading</h2>
//                 {content2['content']?content2['content'].map(content3=>

//                     <div style={content3['attrs']}>

//                             {content3['text']?<p>{content3['text']}</p>:null}

//                     </div>

//                 ):null}
//             </div>

//         ):null}
//         </div>
//     ):null}
// </div>
