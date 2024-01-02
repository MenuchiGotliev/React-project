import React, { useState } from 'react';
import StoreDetails from '../../store/StoreDetails';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import FormAddService from '../formAddService/FormAddService'
import { Grid, Card, CardContent, Typography,CardMedia } from '@mui/material';

const Services = observer(() => {
  useEffect(() => {
   
    StoreDetails.initialbusinessServices();
  }, [])
  const [showEditService, setShowEditService] = useState(false)
  return (
    <>

      {/* <div className="hhh">

        {StoreDetails.businessServices.map((c, i) =>

          <div className='singlemeetingtoadmin'>
            <h3>{c.name}</h3>
            <div className='des'>{c.description}</div>

            <div className='price'>{c.price}</div>
          </div>

        )}

      </div> */}
      <div>
        <Grid container spacing={2} marginTop={10}>
          {StoreDetails.businessServices.map(service => (
            <Grid item key={service.id} xs={12} sm={6} md={4} lg={3} style={{ flexGrow: 1 }}>
              
              <Card  sx={{ maxWidth: 345,height:400 }}>

            
                <CardMedia
                  component="img"
                  alt={service.name}
                  height="140"
                  image={service.img}
                />
                <CardContent>
                  <Typography variant="h6">{service.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                  {/* ניתן להוסיף יותר מידע ורכיבים של Mui לכרטיסיה */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className='addItem'>
        <FormAddService></FormAddService>
      </div>
    </>

  )
});

export default Services;
