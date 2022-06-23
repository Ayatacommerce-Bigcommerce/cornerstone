import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import VerticalStepper from './VerticalStepper';
import SpaceXlaunches from './spaceXlaunches';

export default function CouponDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div>   
      <Button color="secondary" variant="contained" onClick={toggleDrawer('right', true)}>Click Here For A Coupon</Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        <VerticalStepper />
      </Drawer>
    </div>
  );
}