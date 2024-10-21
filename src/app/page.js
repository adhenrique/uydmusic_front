import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';
import AudioPlayer from '../components/H5Player/es';
import '../components/H5Player/styles/styles.css';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ height: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', width: 500, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Image src="/uydlogo.png" width="300" height="300" alt="uyd logo" />
          <AudioPlayer
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
          />
        </div>
      </Box>
    </Container>
  );
}
