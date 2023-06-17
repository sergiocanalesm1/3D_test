import { Grid, Box } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';

export function Footer() {
  return (
      <Grid container>
        <Grid item xs={12} container justifyContent="center">
          <Box sx={{m:1}}>
            <PlayCircle />
          </Box>
        </Grid>
        <Grid item container>
          <Grid item xs={3}>
            {/* First vertical section */}
          </Grid>
          <Grid item xs={9} container justifyContent="flex-end" alignItems="flex-end" sx={{bgcolor:"lightgrey"}}>
            <Box sx={{m:1}}>
              0/26
            </Box>
          </Grid>
        </Grid>
      </Grid>
  );
}
