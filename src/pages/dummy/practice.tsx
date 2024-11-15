import { Box } from "@mui/material";
import React from "react";

// const ListItem = ({ item }: any) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   return (
//     <div ref={ref} style={{ height: "100px", border: "1px solid gray" }}>
//       {isVisible ? item : "Loading..."}
//     </div>
//   );
// };

// const MyList = ({ items }: any) => {
//   return (
//     <div style={{}}>
//       {items.map((item: any, index: number) => (
//         <ListItem key={index} item={item} />
//       ))}
//     </div>
//   );
// };

const Practice = React.memo(() => {
  // useEffect(() => {
  //   console.log("this is practice route");
  // });
  // const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  return <Box>child component</Box>;
});

export default Practice;
