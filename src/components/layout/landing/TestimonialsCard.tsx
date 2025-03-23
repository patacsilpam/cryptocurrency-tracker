import { testimonialsItem } from "@/data/globals";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/common/Card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export function TestimonialCard({ userCategory }: { userCategory: string }) {
  return (
    <>
      {testimonialsItem
        .filter((item) => item.category === userCategory)
        .flatMap((item) =>
          item.testimonies.map((testimony) => (
            <Card key={testimony.id} className="space-y-4">
              <CardContent className="flex flex-row gap-4">
                <Avatar>
                  <AvatarImage
                    loading="lazy"
                    src={testimony.profile}
                    className="h-14 w-14 object-cover rounded-full"
                  />
                </Avatar>
                <CardHeader>
                  <p className="text-lg font-normal">{testimony.name}</p>
                  <p className="text-small  text-[#d4d4d4]">{testimony.role}</p>
                </CardHeader>
              </CardContent>
              <CardDescription>
                <p>{testimony.testimony}</p>
              </CardDescription>
            </Card>
          ))
        )}
    </>
  );
}
