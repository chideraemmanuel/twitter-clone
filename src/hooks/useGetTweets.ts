import { getDocs } from "firebase/firestore";
import { useQuery } from "react-query";
import { tweetsCollectionReference } from "../config/firebase";

const fetchTweets = async () => {
  // might not need onsnapshot because of react query's background fetch
  const response = await getDocs(tweetsCollectionReference);
  const data = response.docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
  // console.log(data);
  return data;
};

export const useGetTweets = () => {
  const { data, isLoading, error, isError } = useQuery(
    ["fetch tweets"],
    fetchTweets
  );

  return { data, isLoading, error, isError };
};

// export const useGetTweets = () => {

//   const [data, setData] = useState<any>(null)
//   const [isLoading, setIsLoading] = useState(false)

//   // useEffect(() => {
//     onSnapshot(tweetsCollectionReference, (snapshot) => {
//       const data = snapshot.docs.map((item) => {
//         return { ...item.data(), id: item.id };
//       });
//       console.log(data);
//       return data;
//     });
//   // }, []);

// };
