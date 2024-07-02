import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold text-center">Boat Stability</h1>
      <Separator />
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Understanding Boat Stability</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="/images/boat-stability-1.jpg" alt="Boat Stability" width={600} height={400} className="mb-4" />
          <p>
            Boat stability is a crucial aspect of maritime safety. It refers to
            the ability of a boat to return to an upright position after being
            tilted by waves, wind, or other forces.
          </p>
          <p>
            There are two main types of stability: static and dynamic. Static
            stability is the boat's ability to remain stable when at rest,
            while dynamic stability refers to its stability when in motion.
          </p>
        </CardContent>
      </Card>
      <Separator />
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Factors Affecting Stability</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="/images/boat-stability-2.jpg" alt="Factors Affecting Stability" width={600} height={400} className="mb-4" />
          <p>
            Several factors affect a boat's stability, including its shape,
            weight distribution, and center of gravity. A well-designed boat
            will have a low center of gravity and a wide beam to enhance
            stability.
          </p>
          <p>
            Additionally, the distribution of weight on the boat, such as
            passengers and cargo, plays a significant role in maintaining
            stability.
          </p>
        </CardContent>
      </Card>
      <Separator />
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Importance of Stability</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="/images/boat-stability-3.jpg" alt="Importance of Stability" width={600} height={400} className="mb-4" />
          <p>
            Ensuring boat stability is essential for preventing capsizing and
            ensuring the safety of everyone on board. Proper maintenance and
            regular inspections can help identify potential stability issues
            before they become serious problems.
          </p>
          <p>
            Understanding and respecting the limits of your boat's stability can
            make your boating experience safer and more enjoyable.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;