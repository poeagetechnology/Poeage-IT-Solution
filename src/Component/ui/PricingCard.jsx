import React from "react";
import { Check, X } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function PricingCard({ plan, billing }) {

  const price =
    plan.price ||
    `₹${billing === "yearly" ? plan.yearly : plan.monthly}`;

  return (

    <Card
      padding="lg"
      hover
      className={`relative ${plan.highlighted ? "border-purple-600" : ""}`}
    >

      {plan.highlighted && (
        <Badge className="absolute top-4 right-4">
          Most Popular
        </Badge>
      )}

      <h3 className="text-xl font-semibold mb-2">
        {plan.name}
      </h3>

      <p className="text-3xl font-bold mb-3">
        {price}
      </p>

      <p className="text-sm text-gray-600 mb-6">
        {plan.tagline}
      </p>

      <ul className="space-y-3 mb-8">

        {plan.features.map((feature) => (

          <li
            key={feature.name}
            className="flex items-center gap-2 text-sm"
          >

            {feature.available ? (
              <Check size={16} className="text-green-600" />
            ) : (
              <X size={16} className="text-gray-400" />
            )}

            {feature.name}

          </li>

        ))}

      </ul>

      <Button fullWidth>
        {plan.price ? "Contact Sales" : "Get Started"}
      </Button>

    </Card>
  );
}