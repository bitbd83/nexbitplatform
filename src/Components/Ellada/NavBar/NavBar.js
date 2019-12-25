import React from 'react';
import NavBar from '../../NavBar/NavBar';

export default function Main() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

// export default function Main() {
//   return (
//     <div>
//       <MediaQuery query="(min-device-width: 960px)">
//         <DesktopNav />
//       </MediaQuery>
//       <MediaQuery query="(max-width: 959px)">
//         <MobileNav />
//       </MediaQuery>
//     </div>
//   );
// }
