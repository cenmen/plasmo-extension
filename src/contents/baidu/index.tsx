import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import cssText from 'data-text:@/styles/tailwind.css';
import type { PlasmoCSConfig } from 'plasmo';

export const config: PlasmoCSConfig = {
  matches: ['https://www.baidu.com/*', 'https://dict.youdao.com/*']
};

const styleElement = document.createElement('style');

const styleCache = createCache({
  key: 'plasmo-mui-cache',
  prepend: true,
  container: styleElement
});

export const getStyle = () => {
  styleElement.textContent = cssText;
  return styleElement;
};

const MuiThemedContent = () => (
  <CacheProvider value={styleCache}>
    <Stack className='card-container mt-12' spacing={2} direction='row'>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </Stack>
  </CacheProvider>
);
export default MuiThemedContent;
