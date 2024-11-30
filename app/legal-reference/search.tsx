"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SearchProps {
  onSearch: (query: string) => void;
  onCategoryChange: (categories: string[]) => void;
  onBadgeChange: (badges: string[]) => void;
}

const categories = [
  { id: "property", label: "Property Laws", color: "blue" },
  { id: "criminal", label: "Criminal Laws", color: "red" },
  { id: "civil", label: "Civil Laws", color: "green" },
  { id: "constitutional", label: "Constitutional Laws", color: "purple" },
  { id: "business", label: "Business Laws", color: "orange" },
];

const badges = [
  { id: "urgent", label: "Urgent", color: "destructive" },
  { id: "recent", label: "Recent Changes", color: "default" },
  { id: "pending", label: "Pending Review", color: "secondary" },
];

export function LegalSearch({
  onSearch,
  onCategoryChange,
  onBadgeChange,
}: SearchProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];
    setSelectedCategories(newCategories);
    onCategoryChange(newCategories);
  };

  const handleBadgeToggle = (badgeId: string) => {
    const newBadges = selectedBadges.includes(badgeId)
      ? selectedBadges.filter((id) => id !== badgeId)
      : [...selectedBadges, badgeId];
    setSelectedBadges(newBadges);
    onBadgeChange(newBadges);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="relative">
        <motion.div
          className={cn(
            "flex items-center bg-background border rounded-lg shadow-sm transition-all",
            isExpanded ? "ring-2 ring-primary" : "",
          )}
          animate={{ height: "auto" }}
        >
          <div className="flex-1 flex items-center p-4">
            <Search className="h-5 w-5 text-muted-foreground mr-3" />
            <input
              type="text"
              placeholder="Search legal references..."
              className="flex-1 bg-transparent border-none focus:outline-none text-lg"
              onChange={(e) => onSearch(e.target.value)}
              onFocus={() => setIsExpanded(true)}
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mr-2"
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isExpanded ? "transform rotate-180" : "",
              )}
            />
          </Button>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-background border rounded-lg mt-2 p-4 shadow-lg z-10"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category.id}
                        variant={
                          selectedCategories.includes(category.id)
                            ? "default"
                            : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => handleCategoryToggle(category.id)}
                      >
                        {category.label}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Filters</h3>
                  <div className="flex flex-wrap gap-2">
                    {badges.map((badge) => (
                      <Badge
                        key={badge.id}
                        variant={"outline"}
                        className={cn(
                          "cursor-pointer",
                          selectedBadges.includes(badge.id) &&
                            `bg-${badge.color}`,
                        )}
                        onClick={() => handleBadgeToggle(badge.id)}
                      >
                        {badge.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
