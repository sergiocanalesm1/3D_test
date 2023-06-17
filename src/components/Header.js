import { IconButton, Modal, Box, Slide } from '@mui/material';
import React, { useMemo, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { AccessibleForward, AccountCircle, AddLocation, ColorLens, ThreeSixty } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction={props.direction} ref={ref} {...props} />;
});

export function Header({
  setB1Animate,
  setB2Rotate,
  setB3Position,
  setB4Color
}) {
  const [openHomeModal, setOpenHomeModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const buttons = useMemo(() => [
    {
      id:1,
      icon: <AccessibleForward />,
      action: () => setB1Animate( prevState => !prevState )
    },
    {
      id:2,
      icon: <ThreeSixty />,
      action: () => setB2Rotate( prevState => !prevState )
    },
    {
      id:3,
      icon: <AddLocation />,
      action: () => setB3Position( prevState => !prevState )
    },
    {
      id:4,
      icon: <ColorLens />,
      action: () => setB4Color( prevState => !prevState )
    }
  ],[
    setB1Animate,
    setB2Rotate,
    setB3Position,
    setB4Color
  ]);

  return (
    <Box display="flex" justifyContent="space-between">
      <IconButton onClick={() => setOpenHomeModal(true)}>
        <HomeIcon />
      </IconButton>
      <Box sx={{ bgcolor: 'lightgrey', borderRadius: '30px', m:1 }}>
        { buttons.map( button => (
          <IconButton
            key={button.id}
            onClick={button.action}
            sx={{color:"grey"}}
          >
            {button.icon}
          </IconButton>
        ))}
      </Box>
      <IconButton onClick={() => setOpenLoginModal(true)}>
        <AccountCircle />
      </IconButton>

      <Modal
        open={openHomeModal}
        onClose={() => setOpenHomeModal(false)}
        sx={{display:'flex', alignItems:'center', justifyContent:'center'}}
      >
        <Transition in={openHomeModal} direction="right">
          <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.7)', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Home
          </Box>
        </Transition>
      </Modal>

      <Modal
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
        sx={{display:'flex', alignItems:'right', justifyContent:'center'}}
      >
        <Transition in={openLoginModal} direction="left">
          <Box sx={{ bgcolor: 'rgba(0, 128, 0, 0.7)', width: '50vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            login
          </Box>
        </Transition>
      </Modal>
    </Box>
  );
}
