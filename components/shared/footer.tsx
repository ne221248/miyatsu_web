import { Button } from "@/components/ui/button";

export const Footer: React.FC = () => {

    return (
        <footer className="bg-gray-800 text-white py-10 bottom-0 w-full">
            <div className="container mx-auto text-center">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
            <Button className="mt-2" onClick={() => window.location.href = 'https://www.instagram.com/miyatsu_project.2024/'}>
                Contact Us
            </Button>
            </div>
        </footer>
    );
}
