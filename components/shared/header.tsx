import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";

export const Header: React.FC = () => {

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 bg-gray-900 text-white mix-blend-difference">
            <span className="text-sm font-medium z-[101]">MIYATSU PROJECT WEB SITE</span>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <Globe className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                </Button>
            </div>
        </nav>
    );
}