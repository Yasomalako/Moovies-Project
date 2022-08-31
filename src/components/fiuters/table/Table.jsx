import "./table.css";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {mooviesContext} from "../../../contexts/mooviecontext/MoovieContext"
import {useContext} from "react"


function createData(Geners,Years,Cast) {
  return {Geners,Years,Cast };
}

const moovies = [
  createData(),
 
];

export default function DenseTable() {
  const {moovies} = useContext(mooviesContext)
   console.log(moovies);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell>Title</TableCell>
            <TableCell align="right">Geners</TableCell>
             <TableCell align="right">Years</TableCell>
             <TableCell align="right">Cast</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {moovies?.map((moovie) => (
            <TableRow
            key={moovie.name}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell component="th" scope="moovie" >
                {moovie.title}
              </TableCell>
              <TableCell align="right">{moovie.genres[0]}</TableCell>
              <TableCell align="right">{moovie.year}</TableCell>
              <TableCell align="right">{moovie.cast}</TableCell>
            </TableRow>
          ))}
       </TableBody>
      </Table>
    </TableContainer>
  );
}














// export default function DenseTable() {
//   const {moovies} = useContext(mooviesContext)
//   console.log(moovies);
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Title</TableCell>
//             <TableCell align="right">Geners</TableCell>
//             <TableCell align="right">Years</TableCell>
//             <TableCell align="right">Cast</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {moovies?.map((moovie) => (
//             <TableRow
             
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" >
//                 {moovie.title}
//               </TableCell>
//               <TableCell align="right">{moovie.geners[0]}</TableCell>
//               <TableCell align="right">{moovie.year}</TableCell>
//               <TableCell align="right">{moovie.cast[0,1]}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
