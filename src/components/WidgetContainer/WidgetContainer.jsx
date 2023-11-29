import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const WidgetContainer = styled(Paper)(() => ({
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  flex: 1
}));

export default WidgetContainer;
