import { createServer, Model } from "miragejs"
import { scratch, mit , roblox, uiUx, web, python, adeleye, subomi} from "./assets/images"
import { checked, star5, star4 } from "./assets/icons"

createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", students: 19, rating: 4.0,name: "The Complete Scratch Course for Beginners", price: 60, description: "Embark on your coding journey with our Complete Scratch Course for Beginners. Designed for aspiring programmers of all ages, this course introduces you to the fundamentals of programming through the engaging and interactive Scratch platform. Learn to create animations, games, and stories using visual blocks, making coding accessible and fun. With step-by-step guidance and hands-on projects, you'll develop essential problem-solving skills and computational thinking abilities.", imageUrl: scratch, type: "Scratch", instructorUrl: adeleye , instructor: "Adeleye Adedamola" , tick: checked, star: star4, title: "4 out of 5 star"})
        server.create("van", { id: "2", students: 13, rating: 5.0,name: "MIT Application Development", price: 80, description: "Immerse yourself in the world of application development with our MIT Application Development course. Explore cutting-edge technologies and methodologies used to create innovative applications for various platforms. From mobile apps to web applications, this course equips you with the knowledge and skills needed to design, develop, and deploy applications using the latest tools and frameworks. With hands-on projects and expert guidance from industry professionals, you'll gain valuable insights into the application development process and prepare yourself for a successful career in this dynamic field.", imageUrl: mit, type: "MIT", instructorUrl: subomi ,instructor: "Fetuga Adesubomi", tick: checked, star: star5, title: "5 out of 5 star"})
        server.create("van", { id: "3", students: 7, rating: 4.0,name: "The Roblox Game Development Course", price: 100, description: "Embark on an exciting journey into the world of game development with our Roblox Game Development Course. Dive into the robust platform of Roblox and learn how to create immersive and interactive gaming experiences that captivate players worldwide. From designing characters and building environments to scripting game mechanics and implementing multiplayer functionality, this course covers all aspects of Roblox game development. With expert guidance and hands-on projects, you'll master the tools and techniques needed to bring your creative vision to life.", imageUrl: roblox , type: "Roblox", instructorUrl: subomi, instructor: "Fetuga Adesubomi", tick: checked, star: star4, title: "4 out of 5 star"})
        server.create("van", { id: "4", students: 10, rating: 4.0,name: "The Ultimate UI/UX Design Mastery Course", price: 65, description: "Unleash your creativity and design prowess with our Ultimate UI/UX Design Mastery Course. Dive into the world of user interface and user experience design and learn the principles and techniques used by top designers to create captivating and user-friendly digital experiences. From wireframing and prototyping to user testing and interaction design, you'll gain hands-on experience with industry-standard tools and methodologies. Whether you're a beginner or seasoned designer, this course will equip you with the skills and knowledge needed to excel in the field of UI/UX design.", imageUrl: uiUx , type: "Design", instructorUrl: subomi,instructor: "Fetuga Adesubomi", tick: checked, star: star4, title: "4 out of 5 star"})
        server.create("van", { id: "5", students: 13, rating: 4.0,name: "Advanced Web Development", price: 120, description: "Master the art of web development with our Advanced Web Development course. Dive deep into the latest technologies and techniques used by industry professionals to create stunning and responsive websites. From advanced HTML and CSS to JavaScript frameworks like React and Vue.js, you'll learn everything you need to take your web development skills to the next level. With hands-on projects and real-world examples, you'll gain practical experience and build a portfolio of impressive web applications.", imageUrl: web, type: "Development", instructorUrl: adeleye , instructor: "Adeleye Adedamola", tick: checked, star: star4, title: "4 out of 5 star"})
        server.create("van", { id: "6", students: 5, rating: 5.0,name: "Python Complete Course For Beginners", price: 70, description: "Embark on your journey into the world of programming with our Python Complete Course For Beginners. Whether you're new to coding or transitioning from another language, this course is designed to equip you with all the essential skills needed to become proficient in Python. From basic syntax and data structures to more advanced topics like object-oriented programming and file handling, we cover everything you need to know to start writing your own Python programs. With hands-on exercises and practical projects, you'll gain the confidence to tackle real-world coding challenges.", imageUrl: python, type: "Python", instructorUrl: adeleye , instructor: "Adeleye Adedamola", tick: checked, star: star5, title: "5 out of 5 star"})
        server.create("van", { id: "7", students: 25, rating: 5.0,name: "The Ultimate JavaScript Mastery Course for Beginners", price: 60, description: "Dive into the world of JavaScript with our Ultimate JavaScript Mastery Course for Beginners. Whether you're just starting your programming journey or looking to enhance your skills, this course is your gateway to mastering JavaScript. From basic syntax and data types to advanced concepts like DOM manipulation and asynchronous programming, we cover it all in a clear and concise manner. With practical exercises and real-world projects, you'll gain the confidence and expertise to build dynamic web applications with ease.", imageUrl: web, type: "Development", instructorUrl: adeleye , instructor: "Adeleye Adedamola", tick: checked, star: star5, title: "5 out of 5 star"})
        server.create("van", { id: "8", students: 20, rating: 4.0,name: "Introduction to Artificial Intelligence", price: 80, description: "Embark on a fascinating journey into the world of Artificial Intelligence with our Introduction to Artificial Intelligence course. Discover the fundamentals of AI and explore its real-world applications across various industries. From machine learning and neural networks to natural language processing and computer vision, this course provides a comprehensive introduction to AI concepts and techniques. With hands-on projects and practical examples, you'll gain insights into how AI is shaping the future and learn how to leverage its power to solve complex problems.", imageUrl: python, type: "Python", instructorUrl: adeleye , instructor: "Adeleye Adedamola", tick: checked, star: star4, title: "4 out of 5 star"})
        server.create("van", { id: "9", students: 18, rating: 4.5,name: "Advanced Scratch Development", price: 100, description: "Take your Scratch skills to the next level with our Advanced Scratch Development course. Dive deeper into coding concepts and unleash your creativity as you build more complex and interactive projects. From animation and game design to storytelling and multimedia projects, this course will expand your repertoire and challenge you to think outside the box. With expert guidance and hands-on exercises, you'll gain the confidence to tackle advanced Scratch development with ease.", imageUrl: scratch , type: "Scratch", instructorUrl: adeleye , instructor: "Adeleye Adedamola", tick: checked, star: star5, title: "5 out of 5 star"})
        server.create("van", { id: "10", students: 29, rating: 5.0,name: "Data Analytics", price: 65, description: "Embark on your journey into the world of data analytics with our comprehensive course. Whether you're a complete beginner or have some experience with data, this course will equip you with the skills and knowledge you need to analyze and interpret data effectively. Learn essential concepts such as data visualization, statistical analysis, and data mining, and discover how to apply them to real-world scenarios. With hands-on projects and practical exercises, you'll gain valuable experience working with data analytics tools and techniques. Join us and unlock the power of data analytics to make informed decisions and drive business success.", imageUrl: python , type: "Python", instructorUrl: adeleye, instructor: "Adeleye Adedamola", tick: checked, star: star5, title: "5 out of 5 star"})
        server.create("van", { id: "11", students: 12, rating: 4,name: "Introduction to React", price: 120, description: "Discover the world of React with our beginner-friendly course. Whether you're taking your first steps into web development or looking to expand your skills, our React course is designed for you. Learn the fundamentals of building web applications using React in a simple and easy-to-understand way. Explore key concepts like components, state management, and routing, and see how they come together to create powerful user interfaces. With practical projects and clear guidance, you'll build the confidence to start your React journey and create your own interactive web applications.", imageUrl: web, type: "Development", instructorUrl: adeleye ,instructor: "Adeleye Adedamola", tick: checked, star: star4, title: "4 out of 5 star"})
        server.create("van", { id: "12", students: 7, rating: 5.0,name: "Advanced UX Course", price: 70, description: "Become a UX design master with our Advanced UX Course. Elevate your expertise as you explore advanced techniques and best practices. Through hands-on projects and real-world applications, you'll gain the skills to craft captivating digital experiences. From user research to prototyping and usability testing, this course empowers you to create exceptional user interfaces. Join us and shape the future of digital interaction", imageUrl: uiUx, type: "Design", instructorUrl: subomi , instructor: "Fetuga Adesubomi", tick: checked, star: star5, title: "5 out of 5 star"})
   
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/vans", (schema) => {
            return schema.vans.all()
        })
        
        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
})