import * as RadixAvatar from "@radix-ui/react-avatar";

const Avatar = () => (
  <RadixAvatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
    <RadixAvatar.Image
      className="h-full w-full rounded-[inherit] object-cover"
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      alt="Colm Tuite"
    />
    <RadixAvatar.Fallback
      className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
      delayMs={600}
    >
      CT
    </RadixAvatar.Fallback>
  </RadixAvatar.Root>
);

export default Avatar;
