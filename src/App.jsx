import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ParallaxHero from './components/ParallaxHero';
import Footer from './components/Footer';
import CultureSection from './components/CultureSection';
import HistorySection from './components/HistorySection';
import FoodSection from './components/FoodSection';
import SportsSection from './components/SportsSection';
import TourismSection from './components/TourismSection';
import UserInputForm from './components/UserInputForm';

function App() {
    const [userContent, setUserContent] = useState([]);

    useEffect(() => {
        const savedContent = localStorage.getItem('userContent');
        if (savedContent) {
            setUserContent(JSON.parse(savedContent));
        }
    }, []);

    const handleUserSubmit = (data) => {
        const newContent = [...userContent, data];
        setUserContent(newContent);
        localStorage.setItem('userContent', JSON.stringify(newContent));
    };

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-[#F1F3F4] text-[#1D2D44]">
                <Header />
                <main>
                    <Routes>
                        {/* Home Page */}
                        <Route
                            path="/"
                            element={
                                <>
                                    <ParallaxHero />
                                    <CultureSection userContent={userContent.filter(item => item.section === 'culture')} />
                                    <HistorySection userContent={userContent.filter(item => item.section === 'history')} />
                                    <FoodSection userContent={userContent.filter(item => item.section === 'food')} />
                                    <SportsSection userContent={userContent.filter(item => item.section === 'sports')} />
                                    <TourismSection userContent={userContent.filter(item => item.section === 'tourism')} />
                                    <section className="py-16 bg-[#F1F3F4] african-pattern">
                                        <div className="container mx-auto">
                                            <h2 className="section-title">Contribute Your Knowledge</h2>
                                            <UserInputForm onSubmit={handleUserSubmit} />
                                        </div>
                                    </section>
                                </>
                            }
                        />

                        {/* Individual Section Pages */}
                        <Route
                            path="/culture"
                            element={<CultureSection userContent={userContent.filter(item => item.section === 'culture')} />}
                        />
                        <Route
                            path="/history"
                            element={<HistorySection userContent={userContent.filter(item => item.section === 'history')} />}
                        />
                        <Route
                            path="/food"
                            element={<FoodSection userContent={userContent.filter(item => item.section === 'food')} />}
                        />
                        <Route
                            path="/sports"
                            element={<SportsSection userContent={userContent.filter(item => item.section === 'sports')} />}
                        />
                        <Route
                            path="/tourism"
                            element={<TourismSection userContent={userContent.filter(item => item.section === 'tourism')} />}
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;