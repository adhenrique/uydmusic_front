import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';

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
        <div>
          <Image src="/uydlogo.png" width="300" height="300" alt="uyd logo" />
          <br/>
          #player
        </div>
      </Box>
    </Container>
  );
}
