// import React from 'react';

// export default function GradientBackground() {
//   return (
//     <div className="absolute inset-0 -z-10">
//       <div
//         className="absolute inset-0 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] via-[#ee87cb] to-[#b060ff] rotate-0 blur-3xl"
//       />
//     </div>
//   );
// }
export default function GradientBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div
        className="absolute inset-0 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] via-[#ee87cb] to-[#b060ff] rotate-0 blur-3xl"
      />
    </div>
  );
}