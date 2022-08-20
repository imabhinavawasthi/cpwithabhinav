import { useEffect } from 'react';
import '../Login2.css'
import './Sidebar.css';


function SideBar () {
  useEffect(()=> {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
    })
    document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
  }, [])
    
        return (
            
                <main className='whitetext mt-5'>
                    <div>
                        <h1 className='st3'><strong>Course Title</strong></h1>
                        <p>
                            Description
                        </p>
                        <section id="introduction">
                            <h2>Introduction</h2>
                            <p>…</p>
                        </section>
                        <section id="request-response">
                            <h2>Tips &amp; Tricks</h2>
                            <p>…</p>
                        </section>
                        <section id="authentication">
                            <h2>Topic 1</h2>
                            <p>…</p>
                        </section>
                        <section id="endpoints">
                            <h2>Topic 2</h2>
                            <section id="endpoints--root">
                                <h3>Subtopic</h3>
                                <p>…</p>
                            </section>
                            <section id="endpoints--cities-overview">
                                <h3>Subtopic</h3>
                                <p>…</p>
                            </section>
                            <section id="endpoints--city-detail">
                                <h3>Subtopic</h3>
                                <p>…</p>
                            </section>
                            <section id="endpoints--city-config">
                                <h3>Subtopic</h3>
                                <p>…</p>
                            </section>
                            <section id="endpoints--city-spots-overview">
                                <h3>Subtopic</h3>
                                <p>…</p>
                            </section>
                            <section id="endpoints--city-spot-detail">
                                <h3>Subtopic</h3>
                                <p>…</p>
                            </section>
                            <section id="endpoints--city-icons-overview">
                                <h3>Subtopic</h3>
                                <p>…</p>
                            </section>
                            <section id="endpoints--city-icon-detail">
                                <h3>Subtopic</h3>
                                <p>…</p>
                            </section>
                        </section>
                        <section id="links">
                            <h2>Topic 3</h2>
                            <p>…</p>
                        </section>
                        <section id="expanders">
                            <h2>Topic 4</h2>
                            <p>…</p>
                        </section>
                        <section id="filters">
                            <h2>Topic 5</h2>
                            <p>…</p>
                        </section>
                    </div>
                    <nav class="section-nav fadeshow1">
                        <ol>
                            <li>
                                <a href="#introduction">Introduction</a>
                            </li>
                            <li>
                                <a href="#request-response">Tips &amp; Tricks</a>
                            </li>
                            <li>
                                <a href="#authentication">Topic 1</a>
                            </li>
                            <li>
                                <a href="#endpoints">Topic 2</a>
                                <ul>
                                    <li class="">
                                        <a href="#endpoints--root">Subtopic</a>
                                    </li>
                                    <li class="">
                                        <a href="#endpoints--cities-overview">Subtopic</a>
                                    </li>
                                    <li class="">
                                        <a href="#endpoints--city-detail">Subtopic</a>
                                    </li>
                                    <li class="">
                                        <a href="#endpoints--city-config">Subtopic</a>
                                    </li>
                                    <li class="">
                                        <a href="#endpoints--city-spots-overview">Subtopic</a>
                                    </li>
                                    <li class="">
                                        <a href="#endpoints--city-spot-detail">Subtopic</a>
                                    </li>
                                    <li class="">
                                        <a href="#endpoints--city-icons-overview">Subtopic</a>
                                    </li>
                                    <li class="">
                                        <a href="#endpoints--city-icon-detail">Subtopic</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="">
                                <a href="#links">Topic 3</a>
                            </li>
                            <li class="">
                                <a href="#expanders">Topic 4</a>
                            </li>
                            <li class="">
                                <a href="#filters">Topic 5</a>
                            </li>
                        </ol>
                    </nav>
                </main>
                
        );
    
}

export default SideBar;