import { Button } from "@/components/ui/button";
import GlowingText from "@/components/ui/TextHeilight";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Home <GlowingText text="Hello" />
      </h1>
      <Button className="">Button</Button>
      <Button variant="secondary">Button</Button>

    </div>
  );
}
