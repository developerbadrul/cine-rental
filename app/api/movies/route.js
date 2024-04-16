import movies from "@/app/api/movies";
export async function GET(){
    return Response.json(movies);
} 