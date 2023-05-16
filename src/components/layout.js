import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }) {
    return (
        <main className="flex flex-col h-screen">
            <Header />
            {
                children
            }
            <Footer />
        </main>
    )
}