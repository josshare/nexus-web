import { title } from "@/components/primitives";
import {Spacer} from "@nextui-org/spacer";
import {CustomCard} from "./CustomCard";


export default function DocsPage() {
  return (
    <div className="flex">
      <CustomCard />
      <Spacer x={4} />
      <CustomCard />
      <Spacer x={4} />
      <CustomCard />
    </div>
  );
}
