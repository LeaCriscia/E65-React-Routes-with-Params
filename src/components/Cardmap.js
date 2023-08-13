import {Card} from 'react-bootstrap';
import swimming from './images/a_swimming.jpg';
import hopping from './images/a_hopping.jpg';
import Statelessbutton from './Statelessbutton';

const Cardmap=()=> {
    const data = [
        {
            icon: swimming,
            title: "Swimming Activity",
            description: "swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an ..."
        },
        {
            icon: hopping,
            title: "Island Hopping",
            description: "Island Hopping, in recreation and sports, the propulsion of the body..."
        },
        {
            icon: swimming,
            title: "Swimming Activity",
            description: "swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an ..."
        },

    ];
  return (
    <>
    {data.map((activity)=>{
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={activity.icon}/>
            <Card.Body>
              <Card.Title>{activity.title}</Card.Title>
              <Card.Text style={{height: 150}}>{activity.description}</Card.Text>
              <Statelessbutton color="primary" label={activity.title} display="inline-block" margin={10}/> 
            </Card.Body>
          </Card>
        );
    })};   
    </>    
  );
}
export default Cardmap;