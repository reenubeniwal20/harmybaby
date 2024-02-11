import React, { useEffect, useState } from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';

import image1 from './gallery/error/error1.png';
import kr1 from './gallery/keyring/kr1.jpg';
import kr2 from './gallery/keyring/kr2.jpg';
import kr3 from './gallery/keyring/kr3.jpg';
import kr4 from './gallery/keyring/kr4.jpg';
import kr5 from './gallery/keyring/kr5.jpg';
import kr6 from './gallery/keyring/kr6.jpg';
import kr7 from './gallery/keyring/kr7.jpg';
import kr8 from './gallery/keyring/kr8.jpg';
import kr9 from './gallery/keyring/kr9.jpg';
import kr10 from './gallery/keyring/kr10.jpg';
import kr11 from './gallery/keyring/kr11.jpg';
import kr12 from './gallery/keyring/kr12.jpg';
import j1 from './gallery/jewellery/j1.jpg';
import j2 from './gallery/jewellery/j2.jpg';
import j3 from './gallery/jewellery/j3.jpg';
import j4 from './gallery/jewellery/j4.jpg';
import j5 from './gallery/jewellery/j5.jpg';
import j6 from './gallery/jewellery/j6.jpg';
import j7 from './gallery/jewellery/j7.jpg';
import j8 from './gallery/jewellery/j8.jpg';
import j9 from './gallery/jewellery/j9.jpg';
import j10 from './gallery/jewellery/j10.jpg';
import j11 from './gallery/jewellery/j11.jpg';
import j12 from './gallery/jewellery/j12.jpg';
import t1 from './gallery/table/t1.jpg';
import t2 from './gallery/table/t2.jpg';
import t3 from './gallery/table/t3.jpg';
import t4 from './gallery/table/t4.jpg';
import t5 from './gallery/table/t5.jpg';
import t6 from './gallery/table/t6.jpg';
import cs1 from './gallery/cake stand/cs1.jpg';

function Productkeyring() {

    let { productkeyringId } = useParams();
    const [currentImage, setCurrentImage] = useState('');
    const [currentHeading, setCurrentHeading] = useState('');
    const [currentCaption, setCurrentCaption] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [currentDeletePrice, setCurrentDeletePrice] = useState('');
    const [currentPriceDiscount, setCurrentPriceDiscount] = useState('');

    useEffect(() => {
        let mainImage;
        let heading;
        let caption;
        let price;
        let deletePrice;
        let discount;

        switch (productkeyringId) {
            case '1':
                mainImage = kr1;
                heading = 'Glitter Keychain';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.199';
                deletePrice = 'Rs.249';
                discount = '20%';
                break;
            case '2':
                mainImage = kr2;
                heading = 'Solid Grey Keychain';
                caption = 'A solid grey keychain offers a sleek and minimalist design, perfect for adding a touch of understated style to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.199';
                deletePrice = 'Rs.249';
                discount = '20%';
                break;
            case '3':
                mainImage = kr3;
                heading = 'Dirty Blue Keychain';
                caption = 'A keychain offers a sleek and minimalist design, perfect for adding a touch of understated style to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.199';
                deletePrice = 'Rs.249';
                discount = '20%';
                break;
            case '4':
                mainImage = kr4;
                heading = 'Breach pour Keychain';
                caption = 'A keychain design inspired by abstract art or fluid painting techniques, suggesting a dynamic and eye-catching accessory with a modern and artistic flair. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.349';
                deletePrice = 'Rs.449';
                discount = '22%';
                break;
            case '5':
                mainImage = kr5;
                heading = 'Rose Petal Keychain';
                caption = 'A keychain offers a delicate and romantic accessory crafted from real rose petals, preserved in resin, creating a timeless piece that captures the beauty of nature while serving as a functional everyday item. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.299';
                deletePrice = 'Rs.399';
                discount = '25%';
                break;
            case '6':
                mainImage = kr6;
                heading = 'Glitter Keychain';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.199';
                deletePrice = 'Rs.249';
                discount = '20%';
                break;
            case '7':
                mainImage = kr7;
                heading = 'Pom-Pom Keychain';
                caption = 'Add a playful touch to your accessories with our "Pom-Pom Keychain," featuring vibrant colors and soft textures to complement your style while keeping your keys organized and easy to find. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.325';
                deletePrice = 'Rs.399';
                discount = '18%';
                break;
            case '8':
                mainImage = kr8;
                heading = 'Rose Petal Keychain';
                caption = 'A keychain offers a delicate and romantic accessory crafted from real rose petals, preserved in resin, creating a timeless piece that captures the beauty of nature while serving as a functional everyday item. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.399';
                deletePrice = 'Rs.499';
                discount = '20%';
                break;
            case '9':
                mainImage = kr9;
                heading = 'Ocean Keychain';
                caption = 'Capture the serenity of the ocean with our "Ocean Keychain," featuring a unique design inspired by the beauty of the sea. Carry a piece of tranquility with you wherever you go. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.199';
                deletePrice = 'Rs.249';
                discount = '20%';
                break;
            case '10':
                mainImage = kr10;
                heading = 'Glitter Keychain';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.249';
                deletePrice = 'Rs.299';
                discount = '16%';
                break;
            case '11':
                mainImage = kr11;
                heading = 'Glitter Keychain';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.349';
                deletePrice = 'Rs.449';
                discount = '22%';
                break;
            case '12':
                mainImage = kr12;
                heading = 'Glitter Keychain';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = 'Rs.349';
                deletePrice = 'Rs.449';
                discount = '22%';
                break;
                case '13':
                mainImage = j1;
                heading = 'Drop Pendant';
                caption = 'Enhance your style with our elegant "Drop Pendant," crafted to add a touch of sophistication to any ensemble. Made with exquisite craftsmanship, its a timeless accessory for every occasion';
                price = 'Rs.249';
                deletePrice = 'Rs.299';
                discount = '16%';
                break;
                case '14':
                mainImage = j2;
                heading = 'Moon Pendant';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory Illuminate your look with our captivating "Moon Pendant." Crafted with intricate details, this celestial-inspired piece adds a touch of enchantment to any outfit, reflecting the beauty and mystery of the night sky..';
                price = 'Rs.299';
                deletePrice = 'Rs.399';
                discount = '25%';
                break;
                case '15':
                mainImage = j3;
                heading = 'Heart Pendant';
                caption = 'Embrace love and elegance with our "Resin Heart Pendant." Handcrafted with care, this exquisite pendant captures the beauty of resin artistry, adding a touch of romance and charm to your everyday style.';
                price = 'Rs.249';
                deletePrice = 'Rs.299';
                discount = '16%';
                break;
                case '16':
                mainImage = j4;
                heading = 'Earings Combo';
                caption = 'Complete your look with our stunning Earrings Combo! Elevate your style effortlessly with this versatile set, perfect for any occasion.';
                price = 'Rs.799';
                deletePrice = 'Rs.999';
                discount = '20%';
                break;
                case '17':
                mainImage = j5;
                heading = 'Diamond Pendant';
                caption = 'Adorn yourself with timeless elegance with our Diamond Pendant. Crafted to perfection, it adds a touch of luxury and sophistication to any ensemble.';
                price = 'Rs.249';
                deletePrice = 'Rs.299';
                discount = '16%';
                break;
                case '18':
                mainImage = j6;
                heading = 'Moon-Butterfly Combo';
                caption = 'Elevate your style with our Ren Butterfly and Moon Pendant. A graceful blend of nature and celestial charm, perfect for adding a touch of whimsy to your look.';
                price = 'Rs.499';
                deletePrice = 'Rs.599';
                discount = '16%';
                break;
                case '19':
                mainImage = j7;
                heading = 'Pendant Combo';
                caption = 'Discover versatility and elegance with our Pendant Combo. Effortlessly transition from day to night with a curated selection of timeless pendants, perfect for every occasion';
                price = 'Rs.749';
                deletePrice = 'Rs.849';
                discount = '11%';
                break;
                case '20':
                mainImage = j8;
                heading = 'Round Pendant';
                caption = 'Elevate your style with our Round Resin Pendant, a captivating blend of modern design and timeless elegance. Handcrafted with precision and attention to detail, its the perfect accessory to complement any outfit.';
                price = 'Rs.299';
                deletePrice = 'Rs.349';
                discount = '25%';
                break;
                case '21':
                mainImage = j9;
                heading = 'Earing';
                caption = 'Add a touch of artistry to your ensemble with our Resin Earrings, meticulously crafted to showcase intricate designs and vibrant colors. Elevate your look with these unique and lightweight accessories, perfect for any occasion.';
                price = 'Rs.249';
                deletePrice = 'Rs.399';
                discount = '16%';
                break;
                case '22':
                mainImage = j10;
                heading = 'Round Pendant';
                caption = 'Elevate your style with our Round Resin Pendant, a captivating blend of modern design and timeless elegance. Handcrafted with precision and attention to detail, its the perfect accessory to complement any outfit.';
                price = 'Rs.299';
                deletePrice = 'Rs.399';
                discount = '25%';
                break;
                case '23':
                mainImage = j11;
                heading = 'Pendant-Earing Combo';
                caption = 'Elevate your style with our stunning Resin Pendant and Earring Combo. Featuring beautifully crafted pendants and matching earrings, each piece is a unique work of art, adding elegance and charm to any outfit. Make a statement with this versatile and eye-catching jewelry set.';
                price = 'Rs.699';
                deletePrice = 'Rs.799';
                discount = '12%';
                break;
                case '24':
                mainImage = j12;
                heading = 'Pendant-Earing Combo';
                caption = 'Elevate your style with our stunning Resin Pendant and Earring Combo. Featuring beautifully crafted pendants and matching earrings, each piece is a unique work of art, adding elegance and charm to any outfit. Make a statement with this versatile and eye-catching jewelry set.';
                price = 'Rs.449';
                deletePrice = 'Rs.499';
                discount = '10%';
                break;
                case '25':
                mainImage = t3;
                heading = 'Pebble Table';
                caption = 'This unique furnishing adds a touch of whimsy and artistic flair to any space, perfect for those seeking a statement piece that sparks conversation. [Size - 18 inch]';
                price = 'Rs.2199';
                deletePrice = 'Rs.2499';
                discount = '12%';
                break;
                case '26':
                mainImage = t4;
                heading = 'Geode Table';
                caption = 'A geode table showcases the mesmerizing beauty of natural crystals encased within a sleek tabletop. Each table is a one-of-a-kind piece, combining earthy elegance with modern design to elevate any room s aesthetic. [Size - 18 inch]';
                price = 'Rs.2499';
                deletePrice = 'Rs.2999';
                discount = '16%';
                break;
                case '27':
                mainImage = t5;
                heading = 'Flower Table';
                caption = 'A flower table incorporates the delicate beauty of flowers into its design, with real or artificial blooms encased in resin to create a stunning tabletop centerpiece. [Size - 18 inch]';
                price = 'Rs.2999';
                deletePrice = 'Rs.3699';
                discount = '18%';
                break;
                case '28':
                mainImage = t6;
                heading = 'Beach Table';
                caption = 'A beach table captures the essence of the shore, featuring a tabletop adorned with real or simulated sand, shells, and other beach treasures embedded in resin. [Size - 18 inch]';
                price = 'Rs.2799';
                deletePrice = 'Rs.3299';
                discount = '15%';
                break;
                case '29':
                mainImage = t1;
                heading = 'Charcoal Table';
                caption = 'A charcoal table boasts a sleek and modern design, typically crafted from wood or metal and finished with a charcoal-colored surface. This contemporary piece adds a touch of sophistication to any space with its minimalist aesthetic and versatile appeal. [Size - 18 inch]';
                price = 'Rs.2199';
                deletePrice = 'Rs.2499';
                discount = '12%';
                break;
                case '30':
                mainImage = t2;
                heading = 'Breakfast Table';
                caption = 'A small breakfast table is a cozy and practical addition to any kitchen or dining area, offering a compact yet functional space for enjoying morning meals or casual dining. Designed to fit snugly into smaller spaces, such as apartments or breakfast nooks. [Size - 12 * 24 inch]';
                price = 'Rs.2499';
                deletePrice = 'Rs.2999';
                discount = '16%';
                break;
                case '31':
                mainImage = cs1;
                heading = 'Cake Stand';
                caption = 'Elevate your desserts with our stunning resin cake stand, designed to add a touch of elegance to any occasion. Handcrafted with care, this exquisite stand combines durability with artistic flair, making it the perfect centerpiece for showcasing your delicious treats. [Size - 6*4*3 inch]';
                price = 'Rs.1999';
                deletePrice = 'Rs.2499';
                discount = '20%';
                break;
            default:
                setCurrentImage(image1);
                setCurrentHeading('Error');
                return;
        }
        setCurrentImage(mainImage);
        setCurrentHeading(heading);
        setCurrentCaption(caption);
        setCurrentPrice(price);
        setCurrentDeletePrice(deletePrice);
        setCurrentPriceDiscount(discount);
    }, [productkeyringId]);

    return (
        <div>
            <div className="productParent">
                <div className="productGallery">
                    <div className="productGalleryChild">
                        <div className="productImg">
                            <img src={currentImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className="productDetail">
                    <div className="productDetailChild">
                        <h3 className="productHeading">{currentHeading}</h3>
                        <p id="productCaption">{currentCaption}</p>
                        <div className="line"></div>
                        <h4 id="productPrice">{currentPrice}<span id='productPriceCut'> M.R.P: </span><del>{currentDeletePrice}</del><span id="discountPercent">({currentPriceDiscount} OFF)</span></h4>
                        <p id="tax">inclusive of all taxes</p>
                        <div className="buyCartbtn">
                            <button id='productCart'>Add to Cart</button>
                            <button id='productBuy'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productkeyring;
