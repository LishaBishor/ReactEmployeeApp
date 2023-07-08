import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Home = () => {
    var[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setData(response.data);
        })
        .catch(err=>console.log(err));
    },[])
  return (
    <div>
        <Header/>
        <div style={{paddingTop:"100px"}} >
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell style={{color:'red'}}>ID</TableCell>
                        <TableCell style={{color:'red'}}>Name</TableCell>
                        <TableCell style={{color:'red'}}>Email</TableCell>
                    </TableHead>
                    <TableBody>
                        {data.map((val,i)=>{
                            return<TableRow key={i}>
                              <TableCell>{val.id}</TableCell>
                              <TableCell>{val.name}</TableCell>
                              <TableCell>{val.email}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    </div>
  )
}

export default Home