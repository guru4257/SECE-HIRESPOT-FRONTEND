import React, { useEffect, useState } from "react";
import MainNavbar from "../components/MainNavbar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import StudentsTable from "../components/StudentsTable";
import { getStudents } from "../services/postRequest";
import Spinner from 'react-bootstrap/Spinner';


const dummyUsers = [
  {
    username: "Guruprasath M",
    email: "guru4257@gmail.com",
    password: "****",
    regNo: "722820205014",
    rollNo : "20IT014",
    userType: "student",
    batch: "2020-2024",
    department: "Information Technology",
  },
  {
    username: "Sanjai Ragul M",
    email: "sanjairagul@gmail.com",
    password: "****",
    regNo: "722820205038",
    rollNo : "20IT038",
    userType: "student",
    batch: "2020-2024",
    department: "Artificial Intelligence and Machine Learning",
  },
  {
    username: "Sudharsan DS",
    email: "ds.sudharsan@gmail.com",
    password: "****",
    regNo: "722820205048",
    rollNo : "20IT048",
    userType: "student",
    batch: "2020-2024",
    department: "Information Technology",
  },
  {
    username: "Sudharsan DS",
    email: "ds.sudharsan@gmail.com",
    password: "****",
    regNo: "722820205048",
    rollNo : "20IT048",
    userType: "student",
    batch: "2020-2024",
    department: "Information Technology",
  },
  {
    username: "Sudharsan DS",
    email: "ds.sudharsan@gmail.com",
    password: "****",
    regNo: "722820205048",
    rollNo : "20IT048",
    userType: "student",
    batch: "2020-2024",
    department: "Information Technology",
  },
  {
    username: "Sudharsan DS",
    email: "ds.sudharsan@gmail.com",
    password: "****",
    regNo: "722820205048",
    rollNo : "20IT048",
    userType: "student",
    batch: "2020-2024",
    department: "Information Technology",
  },
  {
    username: "Sudharsan DS",
    email: "ds.sudharsan@gmail.com",
    password: "****",
    regNo: "722820205048",
    rollNo : "20IT048",
    userType: "student",
    batch: "2020-2024",
    department: "Information Technology",
  },
  {
    username: "Sudharsan DS",
    email: "ds.sudharsan@gmail.com",
    password: "****",
    regNo: "722820205048",
    rollNo : "20IT048",
    userType: "student",
    batch: "2020-2024",
    department: "Information Technology",
  },
  {
    username: "Sudharsan DS",
    email: "ds.sudharsan@gmail.com",
    password: "****",
    regNo: "722820205048",
    rollNo : "20IT048",
    userType: "student",
    batch: "2020-2024",
    department: "Information Technology",
  },
  {
    username: "Sudharsan DS",
    email: "ds.sudharsan@gmail.com",
    password: "****",
    regNo: "722820205048",
    rollNo : "20IT048",
    userType: "student",
    batch: "2020-2024",
    department: "Information Technology",
  },
  {
    username: "Sudharsan DS",
    email: "ds.sudharsan@gmail.com",
    password: "****",
    regNo: "722820205048",
    rollNo : "20IT048",
    userType: "student",
    batch: "2020-2024",
    department: "Information Technology",
  },
  {
    username: "Sudharsan DS",
    email: "ds.sudharsan@gmail.com",
    password: "****",
    regNo: "722820205048",
    rollNo : "20IT048",
    userType: "student",
    batch: "2020-2024",
    department: "Information Technology",
  },
];
const ShowStudents = () => {
  const [students, setStudents] = useState([]);

  const[boolConfirm,setBoolConfirm] = useState(false);

  const[neededBatch,setNeededBatch] = useState({batch:''})
  const OnHandleChange = (event)=>{
    const{name,value} = event.target;
    setNeededBatch({...neededBatch,[name]:value});
  }

  const onHandleSubmit = (event)=>{
    event.preventDefault();
    setBoolConfirm(true);
    console.log(neededBatch);
    
    getStudents(neededBatch).then((res)=>{
      console.log(res);
      if(res.Success){
         setStudents(res.data);
         setBoolConfirm(false);
      }
    }).catch((err)=>{
       window.alert("An Error Occurred in Filtering - Try Again");
    }).finally(()=>{
      setBoolConfirm(false);
    })
    setNeededBatch({batch:''});
  }

 
  return (
    <>
      <MainNavbar />
      <Container style={{ marginTop: "4%" }}>
        <Row>
          <Col>
           <Card bg="light" >
           <Form style={{ marginTop: "3%" }} onSubmit={onHandleSubmit}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2} style={{ textAlign: "center" }}>
                  <strong>Batch</strong>
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    type="text"
                    id="batch"
                    value= {neededBatch.batch}
                    name="batch"
                    onChange={OnHandleChange}
                    placeholder="Filter with Batch(2020-2024)"
                    required
                  />
                </Col>
                <Col sm={5}>
                    <Button variant="primary" type='submit' style={{marginTop:'1%'}}>Get Students</Button>
                </Col>
              </Form.Group>
            </Form>
           </Card>
          </Col>
        </Row>
        {/* <Row style={{marginTop:"3%"}}>
            <Col style={{textAlign:"right"}}>
              <Button variant="success" style={{backgroundColor:"lightgreen"}} onClick={downlaodXLSX}>EXPORT AS XLSX</Button>
            </Col>
        </Row> */}
        <Row  style={{marginTop:"2%"}}>
              <Card bg='light'>
              <h5 style={{marginLeft:"3%"}}>Students</h5>
              <hr style={{ border: "3px solid #004E9B", borderRadius: "5px" }}></hr>
              {boolConfirm ?(
                 <Spinner animation="border" role="status" style={{marginLeft:"50%"}}>
                 <span className="visually-hidden">Loading...</span>
               </Spinner>
              ):(
                  <StudentsTable TableData = {dummyUsers}  />
              )}
            </Card>
               
        </Row>
      </Container>
    </>
  );
};

export default ShowStudents;