
import {Button,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react"

const OrderCuciKomplit = () => {
    return (
      <Table  aria-label="Example static collection table">
       
        <TableHeader>
          <TableColumn>NO</TableColumn>
          <TableColumn>CODE-REGIS</TableColumn>

          <TableColumn>NAMA CUSTMER</TableColumn>
          <TableColumn>JENIS PAKET</TableColumn>
          <TableColumn>WAKTU KERJA</TableColumn>
          <TableColumn>BERAT"(KG)"</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>1</TableCell>
            <TableCell>BGR-52TNT</TableCell>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>CEO</TableCell>
            
            <TableCell>Active</TableCell>
            <TableCell>
              <Button>Detail</Button>
              <Button>Hapus</Button>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>2</TableCell>
            <TableCell>BGR-52TNT</TableCell>
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Zoey Lang</TableCell>
           
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
            <TableCell>
              <Button>Detail</Button>
              <Button>Hapus</Button>
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>3</TableCell>
            <TableCell>BGR-52TNT</TableCell>
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Jane Fisher</TableCell>
            
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <Button>Detail</Button>
              <Button>Hapus</Button>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>4</TableCell>
            <TableCell>BGR-52TNT</TableCell>
            <TableCell>William Howard</TableCell>
            <TableCell>William Howard</TableCell>
            
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
            <TableCell>
              <Button>Detail</Button>
              <Button>Hapus</Button>
            </TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>5</TableCell>
            <TableCell>BGR-52TNT</TableCell>
            <TableCell>Albani</TableCell>
            <TableCell>Albani</TableCell>
            
            <TableCell>Community Manggabesar</TableCell>
            <TableCell>Bisa</TableCell>
            <TableCell>
              <Button>Detail</Button>
              <Button>Hapus</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
  
  export default OrderCuciKomplit;