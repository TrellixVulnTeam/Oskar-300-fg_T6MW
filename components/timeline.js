import React from 'react'
import  Image from'next/image'
import '../components/Light/css/timeline.module.css'

const timeline = () => {
    return (
        <div>
            	<> 
<body id="wrapper" className=" ">

	{/* DEMO CONTAINER (THIS SHOULD BE YOUR DESTINATION DIV) */}
	{/* DEMO CONTAINER (THIS SHOULD BE YOUR DESTINATION DIV) */}
		<div className="container">
			
			{/* PRELOAD */}
			<div className="preload">
				<img src="/preloader.gif" alt="" />
			</div>
			
			
			{/*TIMELINE CONTAINER */}
			<div id="timeline_container">
				
				{/* TIMELINE */}
				<div id="timeline" 
					data-fadeInDelay="3000"
					data-width="952"
					data-height="450"
					data-imagesWidth="3400"
					data-imagesHeight="265"
					data-contentWidth="1670"
					data-contentHeight="174"
					data-draggerWidth="59"
					data-draggerHeight="21"
					data-mouseWheel="1"
				>

						
						{/* VIEWPORT - IMAGES */}
						<div class="viewport">
							<div class="images">
								<div className='w-36'>
								<Image src="/public/Hero.png" height="90" width="270" alt="Illustration"></Image>
								</div> 
								<img src="images/" alt="" />
								<img src="images" alt="" />
								<img src="images/content_img_4.png" alt="" />
								<img src="images/content_img_5.png" alt="" />
								<img src="images/content_img_6.jpg" alt="" />
							</div>
						</div>
						
						
						{/* SCROLLBAR (EDIT CSS FOR STYLING) */}
						<div class="scrollbar">
							<div class="track">
							
								{/*  MILESTONES MARKS */}
								<div class="marks">
									<div id="m0" class="mark" data-xpos="360" data-label="MARCH 2018"></div>
									<div id="m1" class="mark" data-xpos="520" data-label="2005"></div>
									<div id="m2" class="mark" data-xpos="700" data-label="2020 - PARTNERS"></div>
									<div id="m3" class="mark" data-xpos="810" data-label="2021"></div>
								</div>
								
								<div class="dragger"></div>
							</div>
						</div>
						
						
						{/* MILESTONES */}
						<div class="milestones">
						
							<div class="content">
							
								
								{/* MILESTONE SAMPLE 1 (FIRST) */}
								<div class="column_first">
									<div class="c200">
										<span class="date">SEPTEMBER 2017 - EROEFFNUNG</span>
										<span class="txt">Michael Schreck und Volker Schneider eröffnen in Hommage an eine typische Kiezkneipe auf St. Pauli - in der Altstadt <strong>den Rettungsanker - Freiburg</strong><br/> </span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 2 */}
								<div class="column">
							class		<div class="c125">
										<span class="date">2018</span>
										<span class="txt">Der Retungsanker hat sich in der Freiburger<br/><br/>Knepipenszene voll etabliert</span>
										<span class="thumb"><a href="#extended_text1" data-rel="prettyPhoto" title=""><img src="images/read_more.png" alt="" class="readmore" title="READ MORE" /></a></span>
										
										<div id="extended_text1" class="hidden">	{/* SAMPLE OF HIDDEN DIV WITH EXTENDED CONTENT */}
											<p><strong className="strong">Sample of extended content opened with lightbox</strong><br/><br/>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 3 */}
								<div class="column">
									<div class="c125">
										<span class="date">SEPTEMBER 2019</span>
										<span class="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
										<span class="date"><br/>NOVEMBER 2019</span>
										<span class="txt">Duis aute irure dolor in voluptate velit esse.</span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 4 */}
								<div class="column">
									<div class="c125">
										<span class="date">2020 - 20 YEARS<br/>ANNIVERSARY VIDEO</span>
										<span class="thumb"><a href="http://vimeo.com/24492485" data-rel="prettyPhoto" title="20 Years Anniversary Video" class="video_rollover"><img src="images/video_sample_thumb.png" alt="" /></a></span>
										<span class="thumb_description">Short video description</span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 5 */}
								<div class="column">
									<div class="c150">
										<span class="date">2021</span>
										<span class="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
										<span class="big_link"><a href="images/gallery_sample_02.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 01"> IMAGE GALLERY</a></span>
										
										<div class="hidden">	{/* SAMPLE OF HIDDEN GALLERY ITEMS */}
											<a href="images/gallery_sample_01.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 02"></a>
											<a href="images/gallery_sample_03.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 03"></a>
										</div>
										
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 6 */}
								<div class="column">
									<div class="c125">
										<span class="date">2022 - WPA PARTNERS</span>
										<span class="txt">Sample of external links:</span>
										<span class="link"><br/><a href="http://themeforest.net/user/pezflash" target="_blank">www.envato.com</a></span>
										<span class="link"><a href="http://themeforest.net/user/pezflash" target="_blank">www.themeforest.net</a></span>
										<span class="link"><a href="http://themeforest.net/user/pezflash" target="_blank">www.codecanyon.net</a></span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 7 */}
								<div class="column">
									<div class="c225">
										<span class="date">2023 - WIDE COLUMN SAMPLE</span>
										<span><img src="images/logos.png" alt="" /></span>
										<span class="txt">Ut enim ad minim veniam, quis nostrud exercit ullamco. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>	
										<span class="thumb"><a href="#extended_text2" data-rel="prettyPhoto" title=""><img src="images/read_more.png" alt="" class="readmore" title="READ MORE" /></a></span>
										
										<div id="extended_text2" class="hidden">	{/* SAMPLE OF HIDDEN DIV WITH EXTENDED CONTENT */}
											<p><strong>Sample of extended content opened with lightbox</strong><br/><br/>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 8 */}
								<div class="column">
									<div class="c125">
										<span class="date">2024 - PRESENT</span>
										<span class="thumb"><a href="images/gallery_sample_01.jpg" data-rel="prettyPhoto[sample_gallery2]" title="10 Years Anniversary Video" class="image_rollover"><img src="images/image_sample_thumb.png" alt="" /></a></span>
										<span class="thumb_description">Image description</span>
										
										<div class="hidden">	{/* SAMPLE OF HIDDEN GALLERY ITEMS */}
											<a href="images/gallery_sample_02.jpg" data-rel="prettyPhoto[sample_gallery2]" title="Gallery sample 02"></a>
											<a href="images/gallery_sample_03.jpg" data-rel="prettyPhoto[sample_gallery2]" title="Gallery sample 03"></a>
										</div>
									</div>
								</div>
								
							</div> {/* end content */}
							
						</div> {/* end milestones */}
						
						
						{/* AUDIO PLAYER */}
						<div class="audio_player">
							<audio src="mp3/music.mp3" preload="auto"></audio>
						</div>
										
				
				</div> {/* end timeline */}
				
				
				{/* SHADOW */}
				<div class="shadow">
					<img src="images/shadow.png" alt="" />
				</div>
			
			
			</div> {/* end timeline container */}

		</div> {/* end container */}		

y</body>
</>

        </div>
    )
}

export default timeline
