import { Button, IconButton} from "@mui/material"; 
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';



const Header = () => {
    return (
    <div 
    
    style={{ 
    display: "flex" , 
    gap: "10px" ,
    justifyContent: "space-between",
    alignItems: "center" ,
    }}>

    <div>
    <Button variant="text">Om</Button>

    <Button variant="text">Store</Button>

    </div>

    <div style={{ display: "flex", alignItems: "center" }}>
        <Button>Gmail</Button>
        <Button>Bilder</Button>

        <IconButton>
            <AppsIcon />
        </IconButton>

        <Avatar 
        sx={{ bgcolor: deepOrange[300], marginTop: "-5px"
        }}>DH</Avatar>
    </div>

</div>
);
}; 

export default Header; 
