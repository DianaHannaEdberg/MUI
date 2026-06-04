import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';



const Search = () => {
  
return (

    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
      noValidate
      autoComplete="off"
    >
      
      <TextField 
      id="outlined-basic" 
      placeholder="Lägg en webbadress" 
      variant="outlined" 
      sx={{ width: "350px", marginTop: "20px", "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
      slotProps={{

        input: {
          startAdornment: (

            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>

          ) ,
          endAdornment: (

            <InputAdornment position="end">
              <MicIcon />
              <PhotoCameraIcon />
            </InputAdornment>
             ),
            },
          }}

      />
      
    </Box>
  );
};

export default Search;  
