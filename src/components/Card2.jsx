import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const ServerDrivenUI = ({ jsonData }) => {
  console.log("jsonData",jsonData);
  return (
    <div>
      
      {jsonData.content?jsonData.content.map((blockGroup, index) => (
        <div key={index}>
          {blockGroup.content?blockGroup.content.map((blockContainer, index) => (
            <Card key={index} style={{ marginBottom: '10px' }}  variant="outlined">
              <CardContent>
                {blockContainer.content?blockContainer.content.map((block, index) => (
                  <Typography
                    key={index}
                    variant={block.type === 'heading' ? 'h5' : 'body2'}
                    component={block.type === 'heading' ? 'h2' : 'p'}
                    align={block.attrs.textAlignment}
                    style={{
                      color: block.attrs.textColor,
                      backgroundColor: block.attrs.backgroundColor,
                    }}
                  >
                    {block.content?block.content.map((text, index) => (
                      <span
                        key={index}
                        style={text.marks?text.marks.reduce((styles, mark) => {
                          if (mark.type === 'textColor') {
                            return { ...styles, color: mark.attrs.color };
                          } else if (mark.type === 'backgroundColor') {
                            return { ...styles, backgroundColor: mark.attrs.color };
                          }
                          return styles;
                        }, {}):null}
                      >
                        
                        {text.text}
                      </span>
                    )):null}
                  </Typography>
                )):null}
              </CardContent>
            </Card>
          )):null}
        </div>
      )):null}
    </div>
  );
};

export default ServerDrivenUI;
