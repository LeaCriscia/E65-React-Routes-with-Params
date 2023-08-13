import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// const Postcard=({cardpics, name})=> {
// console.log(cardpics, name);
const Postcard=(props)=> {
    //console.log(props.cardpics, props.name);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.cardpics}/>
      <Card.Body>
        <Card.Title>Swimming Activity</Card.Title>
        <Card.Text>
        swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an ...
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Postcard;