import { BaserowMonster } from "@/types/baserow";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

interface MonsterCardProps {
    monster: BaserowMonster;
}

export const MonsterCard = ({ monster }: MonsterCardProps) => {
    return (
        <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-card border border-border/20 card-hover transform transition-transform duration-300 hover:scale-105 relative">
            <img
                src={monster.Cover[0].url}
                alt={monster.Name}
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* CR Badge Top Right */}
            <div className="absolute top-4 right-4 z-20">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/30 drop-shadow-lg">CR: {monster.cr}</span>
            </div>
            <div className="relative z-10 bg-black/60 w-full h-full flex flex-col justify-between">
                <CardHeader className="p-6 pb-2">
                    <CardTitle className="text-2xl font-bold fantasy-accent mb-2 text-white drop-shadow text-center">{monster.Name}</CardTitle>
                    <p className="text-muted-foreground mb-2 text-white drop-shadow text-center">{monster.Title}</p>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex justify-center items-center">
                    <a href={monster.URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                            Watch Video
                        </Button>
                    </a>
                </CardContent>
            </div>
        </Card>
    );
};
