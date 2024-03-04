// lets discuss start
const loadLets = async (searchText = '') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const letsData = data.posts;
    // console.log(letsData);
    displayLetsData(letsData);
};

const displayLetsData = async (letsData) => {
    // console.log(letsData);

    // get the container
    const discussContainer = document.getElementById('discuss-container');
    discussContainer.textContent = '';

    letsData.forEach((lets) => {
        // console.log(lets);

        // create div
        const letsCard = document.createElement('div');
        letsCard.classList = `flex mt-2 flex-col lg:flex-row gap-6 bg-[#F3F3F5] text-black p-12 rounded-2xl`;

        // set innerHTML
        letsCard.innerHTML = `
        <div>
            <!-- avater start -->
            <div class="indicator">
               <span class="indicator-item badge ${lets.isActive ? 'bg-green-500' : 'bg-red-500' } "></span>
               <div class="w-24"><img class="rounded-2xl" src="${lets.image}" alt=""></div>
            </div>
            <!-- avater end -->
            </div>

                <div>
                    <div>
                        <div class="flex gap-6">
                            <p class="text-sm font-medium leading-4 text-[#12132DCC]">#<span>${lets.category}</span></p>
                            <p class="text-sm font-medium leading-4 text-[#12132DCC]">Author : <span>${lets.author.name}</span></p>
                        </div>

                        <div class="lg:w-[596px] pb-4 border-b-2 border-dashed border-[#12132D40]">
                            <h3 class="text-xl font-bold leading-7 text-[#12132D] mt-2">${lets.title}</h3>
                            <p class="mt-3 leading-6 text-[#12132D99]">${lets.description}</p>
                        </div>
                        </div>

                        <div class="flex justify-between">
                            <div class="flex mt-3">
                                <p><i class="fa-regular fa-comment" style="color: #9297a0;"></i><span class="ml-2 leading-5 text-[#12132D99]">${lets.comment_count}</span></p>

                                <p class="ml-3"><i class="fa-regular fa-eye" style="color: #9399a5;"></i><span class="ml-2 leading-5 text-[#12132D99]">${lets.view_count}</span></p>

                                <p class="ml-3"><i class="fa-regular fa-clock" style="color: #959aa3;"></i><span class="ml-2 leading-5 text-[#12132D99]"><span>${lets.posted_time}</span> min</span></p>
                            </div>

                            <div onclick="clickAdd()" class="bg-[#10B981] w-fit py-1  px-2 rounded-full mt-3">
                                <i class="fa-solid fa-envelope-open" style="color: #ffffff;"></i>
                            </div>
                        </div>
                    </div>
            </div>
        `;
        discussContainer.appendChild(letsCard);
        
    });
    // hide loading spiner
    toggleLoadingSpiner(false);
};

const clickAdd = async () => {
    const readCount = document.getElementById('read-count');
    const readCountText = readCount.innerText;
    const count = parseInt(readCountText);
    const updateCount = count + 1;
    readCount.innerText = updateCount;

    const readDetailsContainer = document.getElementById('read-details-container');
    const markAsRead = document.createElement('div');
    markAsRead.classList = `flex gap-2 bg-white rounded-2xl p-4 mt-3`;
    markAsRead.innerHTML = `
    <p class="font-semibold leading-6 text-[#12132D] flex-1">10 Kids Unaware of Their Halloween Costume</p>
    <p class="leading-5 text-[#12132D99]"><i class="fa-regular fa-eye" style="color: #9399a5;"></i><span class="ml-2">1,568</span></p>
    `;
    readDetailsContainer.appendChild(markAsRead);
};


// search button start
const clickSearch = () => {
    toggleLoadingSpiner(true);
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    console.log(searchText);
    loadLets(searchText);
};

const toggleLoadingSpiner = (isLoading) => {
    const loadingSpiner = document.getElementById('loading-spiner');
    if(isLoading){
        loadingSpiner.classList.remove('hidden');
    }
    else{
        loadingSpiner.classList.add('hidden');
    }
};
// search button end
loadLets();
// lets discuss end






// latest post start
// load the data from the api
const loadLatest = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await res.json();
    const latestData = data;
    // console.log(latestData);
    displayLatestData(latestData);
  };



  // display the data in the webpage
  const displayLatestData = async (latestData) => {
    // console.log(latestData);
  
    // get container
    const latestContainer = document.getElementById('latest-container');
  
    latestData.forEach((latest) => {
    //   console.log(latest);
      // create div
      const latestCard = document.createElement("div");
      latestCard.classList = `card w-96 bg-base-100 shadow-xl`;
  
      // set inner html
      latestCard.innerHTML = `
          <figure class="px-8 pt-8">
              <img src="${latest.cover_image}" alt="Banner Images" class="rounded-xl" />
          </figure>
          <div class="card-body text-start">
              <p><i class="fa-regular fa-calendar-minus" style="color: #bac2cf;"></i> <span class="leading-5 text-[#12132D99]">${latest.author?.posted_date || 'No publish date'}</span></p>
              <h2 class="card-title font-bold text-lg leading-7 text-[#12132D]">${latest.title}</h2>
              <p class="leading-7 text-[#12132D99]">${latest.description}</p>
              <div class="flex gap-3 items-center mt-2">
                  <div ><img class="rounded-full w-16" src="${latest.profile_image}" alt=""></div>
                  <div>
                      <h3 class="leading-5 font-medium text-[#12132D]">${latest.author?.name}</h3>
                      <p class="text-sm leading-5 text-[#12132D99]">${latest.author?.designation || 'Unknown'}</p>
                  </div>
              </div>
          </div>
          `;
          latestContainer.appendChild(latestCard);
    });
  };
  loadLatest();
// latest post end
