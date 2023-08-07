import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tab = () => {
    const rows = [
        {
            id:1143155,
            product: "Acer Nitro 5",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9iQET1QG1B6YcMLQ-tjKBoU7cOVXCUwqpQ&usqp=CAU",
            customer:"John Smith",
            date : "1 March",
            amount: 785,
            method:"Cash on Delivery",
            status:"approved",
        },
        {
            id:2235235,
            product: "Play station 5",
            img:"https://www.cnet.com/a/img/resize/ea5ddbafc037b5e1230c1a55a1a53eea7dec1d36/hub/2020/10/26/b60bfe6f-3193-4381-b0d4-ac628cdcc565/img-1419.jpg?auto=webp&fit=crop&height=675&width=1200",
            customer:"Michael",
            date : "1 March",
            amount: 900,
            method:"Online Payment",
            status:"Pending",
        },
        {
            id:1125674,
            product: "Razer blade 5",
            img:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/msnbc/Components/Photos/050914/050914_gillettefusion_hmed.jpg",
            customer:"Jane",
            date : "1 March",
            amount: 920,
            method:"Online",
            status:"approved",
        },
        {
            id:2357741,
            product: "Redragon S101",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DNW7zlnDZW8IoFW9iJuPLsAhA1Tdjitlmg&usqp=CAU",
            customer:"Smith",
            date : "1 March",
            amount: 35,
            method:"Cash on Delivery",
            status:"Pending",
        },
        {
            id:2342357,
            product: "ASUS ROG Strix",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkeg5BfJBmU8yoALjMkWxOzRcBoCxMANCeg&usqp=CAU",
            customer:"Harold carol",
            date : "1 March",
            amount: 2000,
            method:"Online",
            status:"Pending",
        },
      ];
      
    return (
        <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tablecell">Tracking ID</TableCell>
              <TableCell className="tablecell">Product</TableCell>
              <TableCell className="tablecell">Customer</TableCell>
              <TableCell className="tablecell">Date</TableCell>
              <TableCell className="tablecell">Amount</TableCell>
              <TableCell className="tablecell">Payment Method</TableCell>
              <TableCell className="tablecell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow  key={row.id}>
                <TableCell className="tablecell">
                  {row.id}
                </TableCell>
                <TableCell className="tablecell">
                    <div className="cellWrapper">
                        <img src={row.img}alt="" className="image" />
                        {row.product}
                    </div>

                </TableCell>
                <TableCell className="tablecell">{row.customer}</TableCell>
                <TableCell className="tablecell">{row.date}</TableCell>
                <TableCell className="tablecell">{row.amount}</TableCell>
                <TableCell className="tablecell">{row.method}</TableCell>
                <TableCell className="tablecell">
                    <span className={` status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>)
}
export default Tab;