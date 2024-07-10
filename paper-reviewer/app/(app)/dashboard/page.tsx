import PaperCard from "@/app/components/Card";
import Link from "next/link";
import { selectUser } from "@/lib/features/user/userSlice";
import { useAppSelector } from "@/lib/hooks";
const ls = [1,2,3,4,5,6,7]

export default function Dashboard() {
  const user =  useAppSelector(selectUser)
  return (
   
      <div style={{display:"flex", flexDirection:"row", padding:20 }}>
        {ls.map(item => {
          return(
            <Link href={`edit/${item}`}>
              <PaperCard key={item}/>
            </Link>)
        })}
        {user}
      </div>

  );
}
