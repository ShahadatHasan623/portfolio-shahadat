import { useState } from "react";
import profileImage from "./assets/shahadat.jpg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid  lg:grid-cols-12 gap-6 max-w-7xl mx-auto relative">
      {/* LEFT SIDEBAR */}
      <div className="lg:col-span-4 col-span-12 animated-border h-screen lg:sticky top-0 bg-[#1a1a1a]/90 backdrop-blur-3xl shadow-lg shadow-blue-500/90 relative fade-sides lg:mx-0 mx-5">
        <div className="montserrat-font flex flex-col justify-center items-center space-y-6 py-5 ">
          <div className="flex items-center gap-2 bg-[#121212] px-8 rounded-full border-2 border-[#333333]">
            <div className=" w-4 h-4 bg-amber-700 rounded-full my-5"></div>
            <h1 className="text-[#858585] text-xl">
              Avaiable{" "}
              <span className="text-[var(--text-main)] font-semibold">
                3 Project
              </span>
            </h1>
          </div>

          <div className="relative w-60 h-61 mx-auto profile-frame">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl relative z-10"
            />

            <div className="absolute text-center text-6xl font-extrabold -bottom-8 w-full z-10 sacramento-regular">
              <h1 className="text-[var(--text-main)]">Shahadat</h1>
            </div>
          </div>
          <div>
            <h3 className="text-[var(--text-secondary)] text-center font-semibold text-xl mt-5">
              shahadathasan743599@gmail.com
            </h3>
            <p className="text-center space-y-2 text-[var(--text-muted)]">
              Based in Barisal,Bangladesh
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <a
              href="https://www.facebook.com/shahadat.shariar.2024"
              target="_blank"
              className="w-15 h-15 rounded-full bg-[#303030]/90 backdrop-blur-3xl text-[var(--text-main)] flex items-center justify-center shadow-md hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href="https://x.com/shahadat7435"
              target="_blank"
              className="w-15 h-15 rounded-full bg-[#303030]/90 backdrop-blur-3xl text-[var(--text-main)] flex items-center justify-center shadow-md hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-shahadat-942577305/"
              target="_blank"
              className="w-15 h-15 rounded-full bg-[#303030]/90 backdrop-blur-3xl text-[var(--text-main)] flex items-center justify-center shadow-md hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
          <div className="z-100">
            <a
              href="#"
              target="_blank"
              className="px-4 py-2 flex items-center bg-[#121212] border-2 border-[#333333] rounded-full text-[var(--text-main)] font-semibold text-xl  hover:text-amber-600 inline-flex text-xl"
            >
              Get Started <MdArrowOutward  className="ml-12 flex items-center justify-center w-10  h-10 rounded-full bg-[var(--text-main)] text-black z-100" />
            </a>
          </div>
        </div>
      </div>

      {/* MIDDLE CONTENT */}
      <div className="lg:col-span-7 col-span-12 border-red-500 border-4 p-4">
        <h2 className="text-xl font-bold mb-4">Middle Content</h2>
        <p className="text-white">
          Add your long content here… Page scrolls naturally. us iusto quia aut
          eaque, neque autem, laborum velit consequatur. Earum est, odit eum
          tenetur sunt officiis libero placeat optio sit numquam quas laudantium
          iure reiciendis eius non soluta similique deleniti possimus
          distinctio, molestias, a laborum modi quod nemo. Cum, neque ipsum
          voluptatem quas laboriosam consequatur assumenda iusto iste omnis iure
          tempora illo maiores voluptatibus dolores soluta rem nisi optio
          placeat sunt nemo. Provident recusandae vitae accusamus eum natus
          adipisci veritatis nesciunt nulla unde est?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore explicabo soluta natus eum alias mollitia adipisci nemo consequuntur id, eligendi dolor totam sint ut ab vero fugit officia minima, earum exercitationem neque nobis. Culpa mollitia, itaque doloribus tempora reprehenderit delectus accusamus animi nihil illo placeat enim recusandae. Qui corporis ipsam soluta commodi ab laborum nemo, in consectetur numquam nesciunt, suscipit eum quos est laudantium. Accusamus, reprehenderit dolorum. Facilis ex minima numquam esse sequi enim atque laudantium fugiat eos rem voluptas nihil veniam blanditiis, iste deserunt soluta reiciendis aut incidunt exercitationem! Dolorum eius sit laborum, vero molestiae quod? Illum repellendus incidunt sint atque voluptate placeat odit aliquam maiores fugit, debitis enim sunt! Tempore impedit hic laudantium quibusdam sunt incidunt esse eos qui asperiores harum delectus rem repellendus voluptatum pariatur deleniti, fugit reiciendis at odio veniam quo animi, beatae ut voluptates. Dolores, nulla quam quasi aliquam magni est ullam minus provident iusto ratione nobis, ipsa nisi doloribus voluptatem! Fuga quia dolorum in sint unde pariatur eligendi illo voluptatum ut repellendus quasi tempora consequuntur, iure dicta alias est! Laborum tenetur commodi reiciendis nam accusamus velit, perferendis soluta illo dolore doloribus explicabo animi. Ullam quo aperiam nihil, dicta voluptas, veritatis facere doloremque quidem ipsam optio voluptate cumque, accusantium vero aspernatur quos vitae molestias minima. Nobis, doloremque. Incidunt veniam ab dicta nisi at suscipit? Earum possimus quos cupiditate distinctio optio officia asperiores unde architecto, sunt suscipit praesentium? Odio nulla soluta cum hic eligendi aliquam vero mollitia velit commodi, quod error tempora, minus labore enim alias quae possimus recusandae culpa cupiditate, odit nisi earum debitis. Quae repudiandae voluptatem quibusdam tenetur deserunt ducimus, quos recusandae doloribus cupiditate, commodi ab nam ipsum rem quod unde doloremque quia aliquid eum, voluptas enim? Consectetur minima at sunt in qui iure libero, harum exercitationem ipsum, sint, dolore ullam fugit ipsam nam tempora iusto ipsa delectus mollitia. Consectetur laboriosam assumenda at, repellendus blanditiis eveniet provident enim. Quas, aliquid? Corporis nisi pariatur in nostrum, doloribus velit consequatur odit laboriosam voluptates rerum non repellat architecto labore repudiandae itaque inventore asperiores facere eveniet tenetur laudantium. Architecto eos, ducimus provident dicta repudiandae quisquam, facere ex id adipisci laudantium rem odit temporibus sapiente doloribus aliquid dolore. Quae iusto corporis laudantium voluptas earum, rem eum, debitis in porro non recusandae vel quaerat, repellendus nisi sed distinctio molestias quos natus esse. Excepturi vero perferendis quasi provident commodi deleniti reiciendis natus! Nostrum sint totam maxime sunt perspiciatis rem voluptas nam officia, illum eligendi dignissimos, ut blanditiis perferendis accusamus tenetur deleniti natus. Adipisci tempore explicabo molestias rem beatae error cum, magni itaque saepe dolor amet debitis excepturi tempora fugiat quia corporis a dignissimos magnam libero eum delectus eaque quam obcaecati. Obcaecati dolor sint expedita voluptatum, molestias ducimus. In quisquam corporis tenetur nemo, aliquid error nostrum vero eius hic deserunt laudantium pariatur provident quae voluptates excepturi distinctio sed assumenda dolores ut quasi necessitatibus nulla sint consequuntur. Est, quis laudantium! Ipsum nostrum voluptates, aliquid optio, dolorem velit, exercitationem similique laborum nesciunt nemo magnam modi possimus tenetur temporibus. Minus unde nisi autem, eum deserunt maxime! Atque ex eius odit quia, accusantium, officiis, sed perferendis dolorem inventore id rerum debitis? A ut officia fugit eum, animi est iure? Reprehenderit, consequuntur minima. Reprehenderit pariatur enim provident aspernatur. Perferendis cum reiciendis expedita ab ut repellendus sequi natus maiores! Vel numquam voluptas dolor? Adipisci fugiat earum blanditiis, molestiae ex ipsam dolores! Nemo tenetur est aliquam minima nisi possimus mollitia maiores ipsam aliquid incidunt eligendi consequatur excepturi ex provident impedit ab, aperiam cum quod adipisci. Nulla ea officia cum maiores consequatur error aliquid ratione rem architecto libero repudiandae atque, provident aspernatur velit est dignissimos iusto ipsa quae quas similique quia quo sequi. Fugiat voluptates rerum, voluptatum perspiciatis eum doloribus perferendis molestiae commodi porro neque unde recusandae eius, explicabo voluptatibus nesciunt, repellendus tenetur quibusdam iure. Iusto ullam iure aperiam nobis suscipit, error necessitatibus labore fugiat doloribus, recusandae cumque. Maiores, saepe alias. Facere quia suscipit aut aperiam qui numquam odio perferendis asperiores quod voluptatum quam recusandae sed deleniti error neque nulla quo, ullam sunt architecto quis praesentium? Esse laudantium neque sequi recusandae velit. Unde eaque optio error impedit cumque a itaque, reprehenderit rem perferendis totam explicabo magnam vel voluptas debitis dolorum ad quae quam repudiandae dicta? Dolorum odit qui consequuntur at est eius? Fugit nulla animi consequatur ducimus placeat, accusamus sequi ratione inventore ea optio deserunt consequuntur, fugiat dolor, dicta itaque eius in et eveniet soluta sit ipsum. Eaque earum iure, architecto nisi inventore dolorum sapiente dicta eum odio impedit voluptatibus, eos illo, possimus cum quo pariatur? Molestiae doloremque maiores deserunt sapiente eveniet molestias quam, tenetur deleniti, unde beatae, repudiandae perspiciatis inventore iure tempora omnis temporibus ratione! Laudantium velit laboriosam, provident illum, asperiores cumque vel eum esse consequatur, cupiditate voluptate architecto? Iste minus eos obcaecati iure amet labore aliquid repellat tenetur dolores odit! Tempore error, quibusdam culpa voluptas possimus voluptatibus vitae, expedita sunt accusamus labore facere deserunt unde obcaecati soluta mollitia voluptatum repudiandae eius saepe maiores provident atque. Nobis debitis veniam ullam corrupti perspiciatis sit illo quo iusto commodi rerum impedit quia delectus recusandae quidem veritatis accusamus distinctio repellat est exercitationem, nisi vel animi? Impedit quasi accusamus perferendis dignissimos consequatur libero ea voluptatem provident at, modi blanditiis officiis, mollitia, repudiandae assumenda! Corrupti quas assumenda, impedit possimus doloribus ipsa molestias quos at enim cupiditate unde quidem velit cumque qui repellat id nesciunt vitae voluptatum voluptatem vero. Consequuntur maxime dolore, veniam odio, nobis dignissimos quam sequi, voluptate maiores dolores consectetur ratione ex molestiae! Quod fugiat eveniet magni perferendis officia corrupti molestiae dolorum voluptates tenetur, rerum quia officiis praesentium nesciunt eos repudiandae obcaecati necessitatibus nisi enim quasi perspiciatis recusandae modi consectetur! Dolorem molestias, voluptates esse iure minima vero? Odit, eos voluptatem nisi velit illo in alias. Quibusdam, suscipit iste! Perspiciatis ad ipsum eaque optio officia ut architecto odio neque ullam in libero doloribus pariatur nesciunt quia accusantium placeat velit, facere ipsa! Earum eius illum ex mollitia aliquam quas, ab sapiente itaque, quaerat illo esse temporibus veritatis, iste dolorum vitae quia ullam praesentium dolor blanditiis architecto tempora magni est quod quasi? Magnam, inventore? Inventore totam nobis, dolorem cum quisquam autem quae nulla dolore aut rerum fuga a accusamus deleniti recusandae, et blanditiis expedita quia nihil facere incidunt dignissimos quas ratione illo facilis. Quia, odio incidunt debitis officiis nulla, repudiandae distinctio et magnam, amet pariatur eligendi nihil necessitatibus aliquid assumenda tenetur nobis ut aperiam cum modi nisi explicabo natus. Consequatur odit dolorem itaque eveniet deleniti ratione amet assumenda! Vel, placeat! Repudiandae laborum maiores, cupiditate ullam magni aperiam ipsum rem sint, consequatur temporibus cumque laudantium delectus rerum distinctio reprehenderit numquam deleniti iusto tempora impedit amet! Consequuntur voluptate numquam voluptates dolore sit quo! Perspiciatis quidem ipsum non, deleniti tempora eligendi maxime minima, sed magnam, dolorum facere odio doloribus error quam voluptates repellendus sit laudantium nobis dicta. Quae fugiat excepturi inventore quaerat recusandae atque tenetur nihil! Error quae aperiam sapiente, alias commodi nam libero corporis ullam quo. Maxime, libero. Nostrum, veniam ut. Dicta omnis accusamus, repellat necessitatibus animi impedit? Facere nostrum magnam, aliquam praesentium consequuntur eos non vitae adipisci excepturi cupiditate doloremque natus accusantium expedita. Possimus maxime ab ad ullam illum! Nulla aliquam quos velit soluta cupiditate eos blanditiis, rerum expedita a quisquam qui voluptatum sequi accusantium ut mollitia fugiat vero iusto non explicabo earum consequuntur dolores error aliquid? Reprehenderit saepe, vero repellendus voluptas ex dolore odit amet quidem ratione, enim deserunt beatae praesentium debitis exercitationem facilis officiis! Ipsam velit maxime voluptate, repudiandae similique a earum, quas numquam quibusdam reiciendis, et vel unde. Temporibus tempore consequatur ex nulla consectetur unde esse delectus nemo omnis, reiciendis itaque laborum libero? Voluptatum ipsa voluptate totam. Ducimus ut, asperiores explicabo architecto, ullam distinctio ipsum error alias repellat in unde quaerat fuga quam culpa nemo pariatur iure aspernatur non obcaecati nisi odit nesciunt maxime nihil! Omnis temporibus aperiam laboriosam quibusdam reiciendis ad porro id beatae. Illum veniam, facilis incidunt, hic velit et, aut doloremque repellendus totam cum alias modi optio quas. Quaerat, fugit dolorem ad itaque distinctio amet quo eaque eligendi expedita voluptate esse, dicta ex eius? Culpa perspiciatis cumque similique facilis, autem totam repudiandae, consectetur corporis amet quas, tempore cupiditate voluptatibus enim a esse libero reiciendis sunt debitis dolor. Aspernatur ut ad quis ab? Officiis quis maxime, ipsam sequi aut quaerat rerum cupiditate sit assumenda! Laudantium quidem dignissimos incidunt voluptatum, reprehenderit minima asperiores! Sit, voluptatibus libero sed ea totam pariatur omnis possimus. Voluptate unde quasi itaque consectetur deleniti cupiditate dolore. Quasi beatae rem voluptas reiciendis dolores commodi, sit quos facere iusto possimus unde! Rerum, nostrum nesciunt. Tenetur doloremque magnam nesciunt aliquam iure hic, reprehenderit quas error voluptate sunt qui non, ratione totam veniam blanditiis nam. Nobis tenetur, fugit ab eius beatae odio nesciunt autem eaque repudiandae quas. Voluptatum dignissimos sapiente neque temporibus accusamus iste aut eius similique est eum unde ipsum perspiciatis cum, aperiam facere iure ipsam ab ad quod accusantium, consequuntur atque error. Voluptatem, possimus quam, suscipit vel ullam ipsa asperiores perferendis voluptas illum cum, eveniet repudiandae quod fugit enim. Delectus excepturi blanditiis harum minus id laborum iste dolore nobis dolorem reprehenderit molestias magnam soluta enim nam natus, placeat ducimus illo aperiam nostrum sed atque reiciendis. Adipisci eveniet doloremque magnam unde perspiciatis velit sit eaque? Ipsa quos incidunt impedit obcaecati itaque porro cum labore quo. Porro iure, animi neque sequi sint quod fuga, omnis dolor eligendi commodi nobis tenetur repellendus ullam vel? Pariatur amet dolorum odio voluptatibus, labore quaerat et molestiae impedit libero repellendus. Nemo impedit ullam animi quasi eum? Consequuntur nobis itaque pariatur iure ex rerum in, dignissimos nam asperiores quo at modi laboriosam, quisquam accusamus. Corrupti voluptas nobis repudiandae excepturi fugit at minus velit voluptates? Facere temporibus inventore maiores? Adipisci at nesciunt quisquam cum quas assumenda, dolorum vel nemo ipsa quam libero deserunt dignissimos sapiente doloribus enim, corrupti sunt facere officia qui est natus. Recusandae consectetur maxime quibusdam. Est velit deleniti dolores provident, placeat sequi magnam laboriosam quis dolor beatae nesciunt voluptates vero odit corrupti, rerum a cum obcaecati commodi non. Velit eligendi, maxime quasi aliquid consectetur enim quia omnis nam debitis impedit est tempora, corporis officia modi? Itaque tempore deserunt laudantium qui repudiandae, quod incidunt perspiciatis dolor ea voluptatibus. Ut, magnam adipisci. Consequuntur, distinctio magni officia voluptatibus esse beatae vero dolores sequi, sed cum at aliquid nisi temporibus! Aliquid nobis maiores aliquam quae, ab est ducimus minus expedita soluta incidunt consectetur repellendus debitis! Inventore modi id officia facilis eaque, quod iusto, eos voluptatem tenetur aperiam est sequi delectus porro, rem voluptas numquam quis molestiae ab tempora esse accusantium? Recusandae debitis consequatur modi impedit animi accusamus molestiae blanditiis officia, consectetur doloribus consequuntur nemo, sed expedita optio eaque architecto id? Itaque cum corrupti blanditiis ut veritatis recusandae consequuntur repellendus maiores incidunt saepe nemo voluptatum veniam suscipit consectetur aut dolor quas, iste doloremque ullam eveniet accusantium illum omnis id! Tempora et, eum sit doloribus obcaecati laboriosam ad voluptas, qui excepturi animi at doloremque optio magnam odit enim eaque aperiam vitae asperiores quisquam ut! Hic pariatur harum quos, quibusdam dicta nostrum expedita autem voluptatem! Laborum veritatis quaerat, atque sint ipsum officiis rem fuga? Reprehenderit, deserunt. Maiores perspiciatis nihil delectus iure illum laboriosam sit debitis sunt atque unde veniam expedita, tempore quia. Dolore magni eligendi ipsa aliquid veniam quas, nihil, alias ratione praesentium modi ad sapiente sed ipsam? Porro ratione at neque velit temporibus quaerat, sunt omnis hic. Soluta illum eum, esse qui a temporibus hic tenetur accusantium voluptate error aliquid, corporis laborum. Vitae quasi, ipsam in quae tenetur sint sequi ex praesentium. Perferendis, debitis. Dolores fuga possimus amet nesciunt nemo recusandae. Quidem sit soluta illum laboriosam laudantium ipsam enim adipisci vel corrupti ducimus quo quos at error molestiae, veritatis eligendi repellat, facere explicabo aperiam facilis magni ea aspernatur! Iure possimus vero atque nulla non est minima aut, aspernatur quo molestias excepturi sit commodi recusandae nemo! Sint cupiditate aliquam, dignissimos ipsum molestiae nihil quibusdam unde iusto voluptatibus molestias explicabo rerum quam delectus reprehenderit, iure placeat aperiam eum exercitationem architecto eveniet perspiciatis? Quas molestias ut ducimus assumenda eius, vero eum necessitatibus fuga. Nemo, accusamus. Minus possimus totam unde delectus eveniet, dolores iste obcaecati dolor explicabo consectetur sunt, facilis, velit error quam minima. Fuga, consectetur aliquam.
        </p>
      </div>

      {/* RIGHT SIDEBAR (Desktop Fixed) */}
      <div className="lg:col-span-1 hidden lg:block border-green-500 border-4 rounded-3xl h-screen lg:sticky top-0 p-4">
        <ul className="space-y-3">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* MOBILE TOOLS ICON */}
      <div className="col-span-12 lg:hidden flex justify-end p-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 absolute -top-5 right-0  text-white px-4 py-2 rounded-md"
        >
          Tools
        </button>
      </div>

      {/* MOBILE SIDEBAR (Drawer) */}
      {open && (
        <div
          className="
          fixed top-0 right-0 
          h-full w-64 bg-white 
          shadow-xl border-l border-green-500 
          z-50 p-6
        "
        >
          <button
            onClick={() => setOpen(false)}
            className="bg-red-500 text-white px-3 py-1 rounded-md mb-4"
          >
            Close
          </button>
          <ul className="space-y-3">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}
