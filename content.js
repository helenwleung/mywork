// ── UI STRINGS (bilingual) ─────────────────────────────────
const UI = {
  en: {
    navAbout:        'About',
    navPublications: 'Research',
    navWork:         'My Work in Context'
  },
  zh: {
    navAbout:        '关于我',
    navPublications: '发表论文',
    navWork:         '我的工作背景',
    navContact:      '联系 ↗',
    cmHeading:  '与我<em>联系。</em>',
    cmSub:      '创始人、投资者、研究者及合作者 — 欢迎与Helen建立连接。',
  }
};

// ── CONTENT (bilingual) ────────────────────────────────────
const CONTENT = {

  work: {
    eyebrow:  { en: 'My Work',  zh: '我的工作' },
    headline: {
      en: 'My work across the life sciences ecosystem',
      zh: '覆盖药物发现与开发全管线的专业经验'
    },
    tagline: {
      en: 'From target identification to commercial investment.',
      zh: '从靶点识别到商业投资。'
    },
    intro: {
      en: 'I\'ve had the opportunity to work at various stages in the life sciences value chain such as: applying AI and advanced analytical techniques for crystal structure prediction in drug discovery at GSK; creation of automated analysis pipelines of novel materials synthesis at Altrove; and R&D strategy consulting for biopharmaceutical and technology companies at L.E.K. Consulting.',
      zh: '生命科学生态系统涵盖多个阶段与利益相关者。凭借我的工程学背景，我有幸参与了管线中的多个环节。'
    },

    // ── PIPELINE STAGES ──────────────────────────────────────
    // Each stage: tag, title, sublabel, badgeAbbr, badgeLabel, badgeImg, body
    // To use a logo image: set badgeImg to the file path, e.g. 'logos/cambridge.png'
    // Leave badgeImg as null to display the text abbreviation instead.
    pipeline: [
      {
        tag:        { en: 'PhD & Industrial Research in Small Molecule Crystallography',   zh: '研究'   },
        title:      { en: 'Drug Discovery',  zh: '药物发现' },
        sublabel:   { en: 'Selecting promising drug candidates', zh: '药物晶体学 · 冷冻电镜 · 小分子' },
        badgeAbbr:  'CAM',
        badgeLabel: { en: 'University of Cambridge', zh: '剑桥大学' },
        badgeImg:   'logos/cambridge.png.webp',
        body: {
          en: `
            <p class="card-text">Cryo-electron microscopy won the Nobel Prize in 2017, and AlphaFold in 2024 for work in protein crystal structures. I've been fortunate to work at the heart of the academic centre which powered these breakthroughs: at Cambridge on electron microscopy for crystallography. Throughout my research, I've contributed new structures to the major databases which store our collective knowledge — namely the Cambridge Crystallographic Database and Protein Databank. Structure-activity relationships are key to determining how drugs will behave. Electron microscopy techniques now regularly generate large volumes of data in short amounts of time — analysis of this data is becoming the bottleneck. A large part of my research was developing algorithms to streamline this analysis, applying different AI architectures to create decision-ready outputs.</p>
            <div class="pill-row">
              <span class="pill">Pharmaceutical Crystallography</span>
              <span class="pill">Cryo-EM</span>
              <span class="pill">Small Molecules</span>
              <span class="pill">3D Electron Diffraction</span>
              <span class="pill">Polymorphism</span>
            </div>`,
          zh: `<p class="card-text">攻读博士学位期间，我专攻电子显微镜学。</p>`
        }
      },
      {
        tag:        { en: 'PhD & Industrial Research in Small Molecule Crystallography',   zh: '工业界' },
        title:      { en: 'Drug Development', zh: '药物开发' },
        sublabel:   { en: 'Designing drug delivery modalities', zh: '长效注射剂 · 纳米科学 · 电子显微镜' },
        badgeAbbr:  'GSK',
        badgeLabel: { en: 'GSK', zh: 'GSK' },
        badgeImg:   'logos/gsk.png',
        body: {
          en: `
            <p class="card-text">My PhD also involved working downstream of discovery in drug development: electron microscopy is a tool, so it can be of use at many points in the value chain, not just drug discovery. Specifically, I worked on nano-milling manufacturing processes to enhance the slow-release properties of cabotegravir, a long-acting injectable HIV drug, through engineering surface-stabilised nano-crystals of the drug.</p>
            <div class="pill-row">
              <span class="pill">Long-Acting Injectables</span>
              <span class="pill">Cabotegravir</span>
              <span class="pill">Nanoscience</span>
              <span class="pill">Drug Manufacturing</span>
            </div>`,
          zh: `<p class="card-text">我研究了一种用于纳米药物的新型制造技术。</p>
            <div class="pill-row">
              <span class="pill">Long-Acting Injectables</span>
              <span class="pill">Cabotegravir</span>
              <span class="pill">Nanoscience</span>
              <span class="pill">Drug Manufacturing</span>
            </div>`
        }
      },
      {
        tag:        { en: 'AI x Materials Developer at Altrove (EF-backed startup)', zh: 'AI与材料' },
        title:      { en: 'AI x Materials Manufacturing', zh: '制造' },
        sublabel:   { en: 'Making manufacturing smarter', zh: '晶体结构预测 · 虚拟实验室 · 稀土矿物' },
        badgeAbbr:  'ALT',
        badgeLabel: { en: 'Altrove', zh: 'Altrove' },
        badgeImg:   'logos/altrove_ai_logo.jpeg',
        // Oxford node stacked below Altrove on the left
        leftBadge: {
          abbr:    'OX',
          label:   { en: 'University of Oxford', zh: '牛津大学' },
          img:     'logos/oxford.png.jpeg',
          tag:     { en: 'Research Masters Degree', zh: '教育' },
          title:   { en: 'AI x Scientific Image Analysis', zh: '材料工程' },
          sublabel:{ en: 'Semiconductors · Analytical techniques · Manufacturing', zh: '半导体 · 分析技术 · 制造' },
          body: {
            en: `
              <p class="card-text">I spent a year in the Electron Image Analysis Group, building a convolutional neural network (CNN) to analyse electron micrographs to track the growth of defects in 2D semiconductors (molybdenum disulphide), critical for controlling its functional properties. The CNN I built compressed 2 Tb of data analysis (which would have taken thousands of hours for humans to label) into several minutes of model work. Experimental techniques are increasingly generating massive volumes of data; meaningful data analysis is the bottleneck which requires both domain expertise and AI literacy, as demonstrated by this research.</p>
              <div class="pill-row">
                <span class="pill">Nanoengineering</span>
              </div>`,
            zh: `<p class="card-text">我以优等成绩毕业于牛津大学材料科学专业。</p>`
          }
        },
        body: {
          en: `
            <p class="card-text">There's plenty of parallel problems when it comes to manufacturing organic and inorganic materials systems. At <a href="https://www.altrove.ai" target="_blank" rel="noopener" class="card-link">Altrove</a>, a deep-tech AI x Materials startup, I built software to automate X-ray diffraction analysis by designing new algorithms and routines. I designed the overarching design pipeline, including where to use human intervention, and where to use automated analysis. This workflow used large crystallographic databases (featuring millions of crystal structures) to identify phases, as well as to identify the presence and propose the structure of new materials made in the lab, critical to assessing their functional properties. This was part of a move to build a virtual lab connecting experimental outputs from novel, newly discovered materials, to the in-house AI model and integrate the new technology to Altrove's existing phase analysis pipeline.</p>
            <div class="pill-row">
              <span class="pill">Crystal Structure Prediction</span>
              <span class="pill">Virtual Lab/AI dev</span>
              <span class="pill">Entrepreneurs First</span>
            </div>`,
          zh: `<p class="card-text">我曾在一家制造业初创公司担任软件工程师，负责搭建一个 "virtual lab"。</p>
            <div class="pill-row">
              <span class="pill">Crystal Structure Prediction</span>
              <span class="pill">Virtual Lab/AI dev</span>
              <span class="pill">Entrepreneurs First</span>
            </div>`
        }
      },
      {
        tag:        { en: 'AI for Health Equity',   zh: '临床'   },
        title:      { en: 'Clinical Development', zh: '临床开发' },
        sublabel:   { en: 'Getting the right drugs to the right people', zh: '性别健康差距 · 可解释AI · 女性健康科技' },
        badgeAbbr:  'LCFI',
        badgeLabel: { en: 'Leverhulme Centre for the Future of Intelligence', zh: 'LCFI' },
        badgeImg:   'logos/lcfi.png.jpeg',
        body: {
          en: `
            <p class="card-text">During my time at Cambridge, I was a Fellow at LCFI (Leverhulme Centre for the Future of Intelligence, Cambridge) where I worked with academic and industry contacts to close the health equity gap. I was the founder of 'FemTech and the Women's Health Gap' thought leadership event, held at Cambridge Tech Week 2024, where I hosted discussions on de-risking AI-exacerbated inequality to health outcomes. In addition, I developed internal thought pieces on how to de-risk bias in AI-enabled ultra-personalised medicine approaches by using explainable AI frameworks for LLMs (using chain of thought) to benchmark medical AI models.</p>
            <div class="pill-row">
              <span class="pill">Gender Health Gap</span>
              <span class="pill">Explainable AI</span>
              <span class="pill">FemTech</span>
              <span class="pill">Health Equity</span>
              <span class="pill">Precision Medicine</span>
              <span class="pill">Clinical Trial Diversity</span>
            </div>`,
          zh: `<p class="card-text">我认为实现医疗平等非常重要。我在 LCFI 担任 research fellow，探索如何利用AI实现这一目标。</p>`
        }
      },
      {
        tag:        { en: 'Life Sciences Strategy and Due Diligence', zh: '风险投资' },
        title:      { en: 'Go To Market', zh: '商业化与并购' },
        sublabel:   { en: 'Making a medicine a commercial success', zh: '药物战略 · 商业与供应商尽职调查' },
        badgeAbbr:  'LEK',
        badgeLabel: { en: 'L.E.K. Consulting', zh: 'L.E.K. 咨询' },
        badgeImg:   'logos/lek.png',
        body: {
          en: `
            <p class="card-text">Nowadays, I'm a life sciences specialist at L.E.K. Consulting.
            My work includes pharmaceutical strategy, commercial due diligence, and vendor due diligence. This is where it clicks together for me:
            I've worked in the deep science of drug discovery and development, and in this job, I help to realise downstream commercial results.
           </p>
            <div class="pill-row">
              <span class="pill">Pharmaceutical Strategy</span>
              <span class="pill">Commercial Due Diligence</span>
              <span class="pill">Vendor Due Diligence</span>
              <span class="pill">New Drug Modalities</span>
              <span class="pill">Medical Manufacturing</span>
              <span class="pill">China–Europe</span>
            </div>`,
          zh: `<p class="card-text">我现在为制药公司工作，负责战略规划、新药市场准入以及 M&A。</p>
            <div class="pill-row">
              <span class="pill">Pharmaceutical Strategy</span>
              <span class="pill">Commercial Due Diligence</span>
              <span class="pill">Vendor Due Diligence</span>
              <span class="pill">New Drug Modalities</span>
              <span class="pill">Medical Manufacturing</span>
              <span class="pill">China–Europe</span>
            </div>`
        }
      }
    ]
  },

  about: {
    eyebrow:  { en: 'About Me', zh: '关于我' },
    headline: { en: '', zh: '' },
    tagline: {
      en: "Hi, I'm Helen! I'm a materials scientist specialising in analytical characterisation techniques, specifically, electron microscopy. Through my research, I have developed novel workflows to show how 'big-data' experiments can be harnessed into decision-ready outputs for biopharma R&D (at GSK) and materials synthesis (at Altrove). I now work in biopharma R&D strategy consulting at L.E.K. Consulting.",
      zh: '你好！我是Helen。我是华裔,来自英国。牛津大学材料工程硕士，剑桥大学材料工程博士。致力于促进中西方生命科学领域的交流与合作。'
    },
    cards: [
      {
        title:   { en: 'Background', zh: '个人简介' },
        body: {
          en: `
            <p class="card-text">I am an expert in analytical characterisation techniques for innovations that require working at the nanoscale. A first-class graduate (MEng) from Oxford, I spent my masters year researching the use of <strong>convolutional neural networks (CNN) for atomic-resolution image analysis</strong>; streamlining analysis of terabytes of electron micrographs into several minutes of CNN work.</p>
            <p class="card-text">I then moved to Cambridge for a GSK-sponsored PhD: a switch to biopharma R&amp;D. Using cryo-electron microscopy, a technique capable of generating terabytes of data in a single afternoon, I <strong>predicted and validated the crystal structures of drugs</strong>, with a highlight application in nano-engineering the slow-release properties of a long-acting injectable HIV drug (cabotegravir).</p>
            <p class="card-text">I subsequently applied my crystallographic expertise to help build out a virtual lab in an AI x materials startup: where I designed and implemented <strong>automated experimental analysis</strong> pipelines.</p>
            <p class="card-text">I have since moved to <strong>life sciences biopharma R&amp;D strategy at L.E.K. Consulting</strong>, connecting the deep science of drug discovery to the delivery of commercial outcomes.</p>
            <div class="pill-row">
              <span class="pill">Biopharma R&amp;D</span>
              <span class="pill">AI x Experimental Data</span>
              <span class="pill">Structure-based Drug Design</span>
            </div>`,
          zh: `
            <p class="card-text">我毕业于牛津大学，主修材料工程(本科和硕士)。之后我前往剑桥大学攻读博士学位，专攻生物材料工程。我写过几篇期刊文章，可以在Google Scholar上阅读。我现在为制药公司工作，负责制定战略，例如如何推出一款新药。</p>`
        }
      },
      {
        tag:     { en: 'Academic Research',      zh: '研究'   },
        title:   { en: 'Peer-Reviewed Publications',  zh: '发表论文' },
        preview: { en: 'Nanoscience · Drug Delivery · Materials', zh: '纳米科学 · 药物递送 · 材料' },
        body: {
          en: `
            <!-- ── PUBLICATIONS SUBHEADING ────────────────────── -->
            <h2 class="section-subheading">Publications</h2>
            <p class="pub-intro">I've signposted the most exciting takeaways from each paper in a paragraph below. These are my own words, but feel free to use your LLM of choice to explore more.</p>
            <!-- ── FULL PAPER LINKS ───────────────────────────── -->
            <div class="pub-links">
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://www.nature.com/articles/s42004-025-01729-2" target="_blank" rel="noopener">Polytypes and planar defects revealed in the purine base xanthine using multi-dimensional electron diffraction ↗</a>
                <p class="pub-link-author"><u>Helen W. Leung*</u> et al. · Communications Chemistry, 2025 <span class="nature-badge">Nature Portfolio</span></p>
                <button class="pub-toggle" onclick="togglePubSummary(this)" aria-expanded="false">↓ Read my (non-technical) key takeaways</button>
                <div class="pub-expand">
                <p class="pub-summary">After having discovered the crystal structure of xanthine in my previous paper, this paper goes on to discover more polymorphs of xanthine (see my indomethacin paper for context on polymorphs). Not only do I find more forms of this fundamental molecule, I crucially show that it is possible to have multiple polymorphs within a single nano-crystal of xanthine. This matters because of how drugs are currently regulated by the ICHQ guidelines (legislation for good practice in drug development). It turns out that molecules which have a planar structure, like xanthine, can easily switch in and out between polymorphic forms on the nanoscale. Therefore, defining what a polymorph is- and the associated physicochemical properties such as solubility for small molecule drugs- is more complicated than previously thought.</p>
                <img class="pub-link-preview" src="figures/Leung_xanthinepaper2.png" alt="Xanthine polytypes paper figure" loading="lazy">
                </div>
              </div>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://pubs.acs.org/doi/full/10.1021/acs.cgd.4c01594" target="_blank" rel="noopener">Revealing the crystal structure of the purine base xanthine with three-dimensional (3D) electron diffraction ↗</a>
                <p class="pub-link-author"><u>Helen W. Leung*</u> et al. · Crystal Growth &amp; Design, 2025 <span class="acs-badge">American Chemical Society</span></p>
                <button class="pub-toggle" onclick="togglePubSummary(this)" aria-expanded="false">↓ Read my (non-technical) key takeaways</button>
                <div class="pub-expand">
                <p class="pub-summary">Xanthine is a molecule that we all produce in our bodies as a result of metabolism. It is closely chemically related to guanine and adenine- what our DNA is made of. Yet, before this work, the arrangement of xanthine molecules in the solid state (its crystal structure) was never known, because of limitations of analytical techniques. Kind of surprising given how fundamental a molecule this is. In this work, I solve the crystal structure of xanthine. But more importantly, this piece of work demonstrates the power of the electron microscope. We show in the paper that we can resolve the positioning of the hydrogen atoms in the structure. Hydrogen is the lightest element in the periodic table, so it typically interacts only very lightly with analytical techniques. The fact that we can see the hydrogens here is important beyond xanthine: the position of hydrogens in a molecule determines what enantiomers we have of a given molecule. In the world of small molecules, different enantiomers can have very different properties in the body (from higher efficacy, to toxicity). This work helps establish the use of electron microscopy in the drug development pipeline.</p>
                <img class="pub-link-preview" src="figures/Leung_xanthinepaper1.png" alt="Xanthine crystal structure paper figure" loading="lazy">
                </div>
              </div>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://journals.iucr.org/m/issues/2024/05/00/of5005/index.html" target="_blank" rel="noopener">From formulation to structure: 3D electron diffraction for the structure solution of a new indomethacin polymorph from an amorphous solid dispersion ↗</a>
                <p class="pub-link-author"><u>Helen W. Leung*</u> et al. · IUCrJ, 2024 <span class="iucr-badge">International Union of Crystallography</span></p>
                <button class="pub-toggle" onclick="togglePubSummary(this)" aria-expanded="false">↓ Read my (non-technical) key takeaways</button>
                <div class="pub-expand">
                <p class="pub-summary">Small molecule drugs have dominated the pharmaceuticals market for the past decades. Although new drug modalities (such as biologics- think antibodies, cell and gene therapies) are being developed, small molecules still play an important role in the drug pipeline. In fact, most of the drugs that the vast majority of us will take for non-terminal illnesses are small molecules. A given small molecule drug can have many forms (in the solid state, called crystal polymorphism). Polymorphism can play an important role in drug development because some polymorphs of drugs may have favourable solubility properties, resulting in better efficacy. Some polymorphs may be toxic (as in the case of thalidomide). In this paper, I discover a new polymorph of the arthritis/gout drug, indomethacin. Upon solving its crystal structure (i.e., finding out exactly how the molecules are arranged in this form), we can see that this form is likely more soluble than the marketed form. In oral dosage forms, more soluble forms tend to be absorbed more easily by the body. That's why this work is exciting.</p>
                <img class="pub-link-preview" src="figures/Leung_indomethacin_paper.png" alt="Indomethacin paper figure" loading="lazy">
                </div>
              </div>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=S-E_D24AAAAJ&citation_for_view=S-E_D24AAAAJ:IjCSPb-OGe4C" target="_blank" rel="noopener">Combining 3D-Electron Diffraction with Scanning Electron Diffraction to investigate nanocrystals within a long acting injectable pharmaceutical formulation ↗</a>
                <p class="pub-link-author"><u>Helen W. Leung*</u> et al. · Acta Crystallographica A <span class="iucr-badge">International Union of Crystallography</span></p>
                <button class="pub-toggle" onclick="togglePubSummary(this)" aria-expanded="false">↓ Read my (non-technical) key takeaways</button>
                <div class="pub-expand">
                <p class="pub-summary">We can think of nanoscience as engineering at the molecular scale. Long-acting injectables are a technology designed to deliver a slow-release drug, rather than a patient having to take daily oral medicine. The underlying technology harnesses basic surface chemistry principles at the nanoscale. In this paper, I examine the effects of nanomilling on a long-acting injectable HIV drug. Without the nanomilling, the drug particles would be too large and have limited shelf life and performance. It is by nano-milling that we can control the particle size and crystal behaviour of the solid state drug, and give it these desirable properties.</p>
                </div>
              </div>
              <p class="pub-footnote">* First author</p>
            </div>

            <!-- ── INVITED TALKS / WEBINARS ───────────────────── -->
            <h2 class="section-subheading">Invited Talks &amp; Webinars</h2>
            <ul class="talks-list">
              <li><em><a href="https://www.monash.edu/__data/assets/pdf_file/0006/4141680/HWL-Seminar.pdf" target="_blank" rel="noopener">'Multi-dimensional electron diffraction of pharmaceuticals'</a></em>, Monash Centre for Electron Microscopy, Australia, October 2025</li>
              <li><em>'4D-STEM and 3D Electron Diffraction in Pharmaceutical Materials'</em>, Workshop on the Applications of 4D-STEM, University of Leeds, September 2025</li>
              <li><em><a href="https://www.youtube.com/watch?v=VSTNDJBy_ds" target="_blank" rel="noopener">'3D-ED and 4D-STEM as complementary acquisition modalities'</a></em>, Invited Webinar, Quantum Detectors, March 2025</li>
              <li><em>'MicroED in drug discovery and development: challenges and opportunities'</em>, Industrial Cryo-Electron Microscopy Pharmaceutical Consortium, Cambridge, UK, October 2024</li>
              <li><em>'Scanning Nanobeam Electron Diffraction with 3D Electron Diffraction to Investigate Crystal Defects'</em>, Microscopy and Microanalysis Conference, Cleveland, USA, September 2024</li>
              <li><em>'A multi-pronged approach incorporating 3D Electron Diffraction for the structure solution of an indomethacin polymorph'</em>, International Microscopy Congress, Busan, Korea, September 2023</li>
            </ul>`,
          zh: `
            <!-- ── PUBLICATIONS SUBHEADING ────────────────────── -->
            <h2 class="section-subheading">Publications</h2>
            <p class="pub-intro">I've signposted the most exciting takeaways from each paper in a paragraph below. These are my own words — but feel free to use your LLM of choice to explore more! Or feel free to reach out and ask me.</p>
            <!-- ── FULL PAPER LINKS ───────────────────────────── -->
            <div class="pub-links">
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://www.nature.com/articles/s42004-025-01729-2" target="_blank" rel="noopener">Polytypes and planar defects revealed in the purine base xanthine using multi-dimensional electron diffraction ↗</a>
                <p class="pub-link-author"><u>Helen W. Leung*</u> et al. · Communications Chemistry, 2025 <span class="nature-badge">Nature Portfolio</span></p>
                <button class="pub-toggle" onclick="togglePubSummary(this)" aria-expanded="false">↓ Read my (non-technical) key takeaways</button>
                <div class="pub-expand">
                <p class="pub-summary">After having discovered the crystal structure of xanthine in my previous paper, this paper goes on to discover more polymorphs of xanthine (see my indomethacin paper for context on polymorphs). Not only do I find more forms of this fundamental molecule, I crucially show that it is possible to have multiple polymorphs within a single nano-crystal of xanthine. This matters because of how drugs are currently regulated by the ICHQ guidelines (legislation for good practice in drug development). It turns out that molecules which have a planar structure, like xanthine, can easily switch in and out between polymorphic forms on the nanoscale. Therefore, defining what a polymorph is— and the associated physicochemical properties such as solubility for small molecule drugs- is more complicated than previously thought.</p>
                <img class="pub-link-preview" src="figures/Leung_xanthinepaper2.png" alt="Xanthine polytypes paper figure" loading="lazy">
                </div>
              </div>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://pubs.acs.org/doi/full/10.1021/acs.cgd.4c01594" target="_blank" rel="noopener">Revealing the crystal structure of the purine base xanthine with three-dimensional (3D) electron diffraction ↗</a>
                <p class="pub-link-author"><u>Helen W. Leung*</u> et al. · Crystal Growth &amp; Design, 2025 <span class="acs-badge">American Chemical Society</span></p>
                <button class="pub-toggle" onclick="togglePubSummary(this)" aria-expanded="false">↓ Read my (non-technical) key takeaways</button>
                <div class="pub-expand">
                <p class="pub-summary">Xanthine is a molecule that we all produce in our bodies as a result of metabolism. It is closely chemically related to guanine and adenine — what our DNA is made of. Yet, before this work, the arrangement of xanthine molecules in the solid state (its crystal structure) was never known, because of limitations of analytical techniques. Kind of surprising given how fundamental a molecule this is. In this work, I solve the crystal structure of xanthine. But more importantly, this piece of work demonstrates the power of the electron microscope. We show in the paper that we can resolve the positioning of the hydrogen atoms in the structure. Hydrogen is the lightest element in the periodic table, so it typically interacts only very lightly with analytical techniques. The fact that we can see the hydrogens here is important beyond xanthine: the position of hydrogens in a molecule determines what enantiomers we have of a given molecule. In the world of small molecules, different enantiomers can have very different properties in the body (from higher efficacy, to toxicity). This work helps establish the use of electron microscopy in the drug development pipeline.</p>
                <img class="pub-link-preview" src="figures/Leung_xanthinepaper1.png" alt="Xanthine crystal structure paper figure" loading="lazy">
                </div>
              </div>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://journals.iucr.org/m/issues/2024/05/00/of5005/index.html" target="_blank" rel="noopener">From formulation to structure: 3D electron diffraction for the structure solution of a new indomethacin polymorph from an amorphous solid dispersion ↗</a>
                <p class="pub-link-author"><u>Helen W. Leung*</u> et al. · IUCrJ, 2024 <span class="iucr-badge">International Union of Crystallography</span></p>
                <button class="pub-toggle" onclick="togglePubSummary(this)" aria-expanded="false">↓ Read my (non-technical) key takeaways</button>
                <div class="pub-expand">
                <p class="pub-summary">Small molecule drugs have dominated the pharmaceuticals market for the past decades. Although new drug modalities (such as biologics-  think antibodies, cell and gene therapies) are being developed, small molecules still play an important role in the drug pipeline. In fact, most of the drugs that the vast majority of us will take for non-terminal illnesses are small molecules. A given small molecule drug can have many forms (in the solid state, called crystal polymorphism). Polymorphism can play an important role in drug development because some polymorphs of drugs may have favourable solubility properties, resulting in better efficacy. Some polymorphs may be toxic (as in the case of thalidomide). In this paper, I discover a new polymorph of the arthritis/gout drug, indomethacin. Upon solving its crystal structure (i.e., finding out exactly how the molecules are arranged in this form), we can see that this form is likely more soluble than the marketed form. In oral dosage forms, more soluble forms tend to be absorbed more easily by the body. That's why this work is exciting.</p>
                <img class="pub-link-preview" src="figures/Leung_indomethacin_paper.png" alt="Indomethacin paper figure" loading="lazy">
                </div>
              </div>
              <div class="pub-link-item">
                <a class="pub-link-title" href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=S-E_D24AAAAJ&citation_for_view=S-E_D24AAAAJ:IjCSPb-OGe4C" target="_blank" rel="noopener">Combining 3D-Electron Diffraction with Scanning Electron Diffraction to investigate nanocrystals within a long acting injectable pharmaceutical formulation ↗</a>
                <p class="pub-link-author"><u>Helen W. Leung*</u> et al. · Acta Crystallographica A <span class="iucr-badge">International Union of Crystallography</span></p>
                <button class="pub-toggle" onclick="togglePubSummary(this)" aria-expanded="false">↓ Read my (non-technical) key takeaways</button>
                <div class="pub-expand">
                <p class="pub-summary">We can think of nanoscience as engineering at the molecular scale. Long-acting injectables are a technology designed to deliver a slow-release drug, rather than a patient having to take daily oral medicine. The underlying technology harnesses basic surface chemistry principles at the nanoscale. In this paper, I examine the effects of nanomilling on a long-acting injectable HIV drug. Without the nanomilling, the drug particles would be too large and have limited shelf life and performance. It is by nano-milling that we can control the particle size and crystal behaviour of the solid state drug, and give it these desirable properties.</p>
                </div>
              </div>
              <p class="pub-footnote">* First author</p>
            </div>

            <!-- ── INVITED TALKS / WEBINARS ───────────────────── -->
            <h2 class="section-subheading">Invited Talks &amp; Webinars</h2>
            <ul class="talks-list">
              <li><em><a href="https://www.monash.edu/__data/assets/pdf_file/0006/4141680/HWL-Seminar.pdf" target="_blank" rel="noopener">'Multi-dimensional electron diffraction of pharmaceuticals'</a></em>, Monash Centre for Electron Microscopy, Australia, October 2025</li>
              <li><em>'4D-STEM and 3D Electron Diffraction in Pharmaceutical Materials'</em>, Workshop on the Applications of 4D-STEM, University of Leeds, September 2025</li>
              <li><em><a href="https://www.youtube.com/watch?v=VSTNDJBy_ds" target="_blank" rel="noopener">'3D-ED and 4D-STEM as complementary acquisition modalities'</a></em>, Invited Webinar, Quantum Detectors, March 2025</li>
              <li><em>'MicroED in drug discovery and development: challenges and opportunities'</em>, Industrial Cryo-Electron Microscopy Pharmaceutical Consortium, Cambridge, UK, October 2024</li>
              <li><em>'Scanning Nanobeam Electron Diffraction with 3D Electron Diffraction to Investigate Crystal Defects'</em>, Microscopy and Microanalysis Conference, Cleveland, USA, September 2024</li>
              <li><em>'A multi-pronged approach incorporating 3D Electron Diffraction for the structure solution of an indomethacin polymorph'</em>, International Microscopy Congress, Busan, Korea, September 2023</li>
            </ul>`
        }
      },
    ]
  }
};

// ── PUBLICATIONS ──────────────────────────────────────────────
// Each entry: { year, title, journal, summary }
// summary = 1–2 sentence plain-English description of the paper's
//           methods and key finding — used as AI chat context.
//
// IMPORTANT: when you update entries here, also update the matching
// PUBLICATIONS array in server.js so the chat widget stays in sync.
const PUBLICATIONS = [
  {
    year: '2025',
    title: 'Polytypes and planar defects revealed in the purine base xanthine using multi-dimensional electron diffraction',
    journal: 'Communications Chemistry, 8, 331',
    doi: 'https://doi.org/10.1038/s42004-025-01729-2',
    summary: `This paper uses a combination of 3D electron diffraction (3D-ED) and 4D scanning transmission electron microscopy (4D-STEM) to explore the microstructure of xanthine crystals in detail. Building directly on the first xanthine paper, it identifies twinning in Form I xanthine (a 180° rotation relationship between crystal domains about the [101] axis), solves the structure of a new second polymorph of xanthine called Form II (orthorhombic, space group P2₁2₁2₁, unit cell a=10.10 Å, b=12.54 Å, c=17.91 Å), and shows that Form II is a polytype of Form I— meaning both share identical intra-layer hydrogen-bonded arrangements but differ in how those layers stack. Form I stacking follows an ABAB sequence; Form II follows ABCD, with the layer repeating every four layers. 4D-STEM directly visualises twin boundaries, polytype interfaces, and fine-scale planar disorder (stacking faults at near-random intervals) within individual sub-micron particles of xanthine — demonstrating that a single particle can contain multiple coexisting crystal forms. A multiphase Rietveld refinement of high-resolution synchrotron X-ray powder diffraction (XRPD) data, incorporating a stacking fault model, confirmed these findings in bulk powder. The work argues that disorder on the nanoscale is likely common in layered organic molecular crystals more broadly, with implications for pharmaceutical polymorphism characterisation and regulatory requirements.`
  },
  {
    year: '2025',
    title: 'Revealing the crystal structure of the purine base xanthine with three-dimensional (3D) electron diffraction',
    journal: 'Crystal Growth & Design, 25, 1293–1298',
    doi: 'https://doi.org/10.1021/acs.cgd.4c01594',
    summary: `This paper reports the first crystal structure determination of xanthine (3,7-dihydropurine-2,6-dione), a purine base found widely in organisms and a metabolic precursor to uric acid. Despite xanthine's fundamental biological importance — it is chemically closely related to guanine, hypoxanthine, theophylline, caffeine, and theobromine — its crystal structure had remained unknown because its crystals are too small (sub-micrometre) for conventional single-crystal X-ray diffraction (SCXRD) and strong preferred orientation complicated powder X-ray diffraction analysis. Using 3D electron diffraction (3D-ED) on a Thermo Fisher Titan Krios G3i transmission electron microscope at 300 kV, the structure was solved from a single ~300 nm crystal. The structure (named Form I) is monoclinic with space group P2₁/c, unit cell a=9.82 Å, b=17.87 Å, c=6.79 Å, β=107.5°, with two crystallographically independent xanthine molecules per asymmetric unit (Z'=2). The data quality was sufficient to locate all hydrogen atom positions without geometric restraints, confirming the presence of the expected 7H-tautomer. The crystal structure consists of two-dimensional hydrogen-bonded layers — with four N–H···O and two N–H···N interactions — stacked approximately parallel to the (101̄) planes with an interlayer spacing of ~3.2 Å (weak van der Waals forces). The hydrogen-bonding network shows strong similarity to hypoxanthine crystals. Synchrotron powder X-ray diffraction data suggested the presence of additional polymorphic forms and planar disorder, which were investigated in the follow-up paper. This structure determination opens opportunities for understanding biogenic xanthine crystals found in insect eyes and other organisms, where xanthine is used to manipulate light.`
  },
  {
    year: '2024',
    title: 'From formulation to structure: 3D electron diffraction for the structure solution of a new indomethacin polymorph from an amorphous solid dispersion',
    journal: 'IUCrJ, 11, 744–748',
    doi: 'https://doi.org/10.1107/S2052252524008121',
    summary: `This paper demonstrates 3D electron diffraction (3D-ED) applied directly to a pharmaceutical product formulation — an amorphous solid dispersion (ASD) — rather than a purified single-phase sample. Amorphous solid dispersions are a common formulation strategy for poorly soluble drugs: the active pharmaceutical ingredient (API) is dispersed within an amorphous water-soluble polymer to improve dissolution. An ASD of indomethacin (a well-known non-steroidal anti-inflammatory drug, BCS class II) and polyvinylpyrrolidone (PVP) was prepared by solvent evaporation using dichloromethane (DCM). Within the 95:5 indomethacin:PVP ASD, powder X-ray diffraction revealed an unexpected new crystalline form that did not match any of the eight previously known indomethacin polymorphs. Using 3D-ED on a Thermo Fisher Titan Krios G3i at 300 kV, the crystal structure of this new ninth polymorph — called σ (sigma) — was solved from a single crystal (monoclinic C2/c, a=43.70 Å, b=5.19 Å, c=33.43 Å, β=100.73°, Z'=2). The structure contains two conformationally similar but crystallographically independent indomethacin molecules forming a carboxylic acid dimer. Notably, 12% of the unit-cell volume consists of open hydrophobic channels parallel to the b axis, leading to the hypothesis that DCM molecules acted as a solvent template during crystallisation. This was confirmed by producing the same σ polymorph via simple evaporation of a DCM solution of pure indomethacin at room temperature. The σ polymorph is metastable relative to the thermodynamically stable γ phase and has a more open structure that may exhibit different dissolution properties. Rietveld refinement of synchrotron PXRD data confirmed the structure (Rwp=1.40%). This work demonstrates that 3D-ED can probe unexpected solid-state forms in complex drug product formulations — directly relevant to pharmaceutical development and regulatory solid-form characterisation requirements.`
  },
  {
    year: '2024',
    title: 'Electron diffraction in drug discovery and development: progress, challenges, and prospects',
    journal: 'Submitted for review (2024)',
    doi: null,
    summary: `This is a comprehensive review article surveying the role of 3D electron diffraction (3D-ED, also known as MicroED) across the pharmaceutical pipeline — from early drug discovery through to product formulation and manufacturing. Co-authored with collaborators at GSK Medicines Research Centre and the University of Cambridge, it argues that while SCXRD remains the gold standard for crystal structure determination, 3D-ED has emerged as a powerful complement by enabling structure solution from sub-micrometre crystals — volumes up to one million times smaller than those needed for SCXRD. The review covers solid-state applications in detail: polymorph screening and characterisation, co-crystal and salt screening, structure determination of APIs in complex mixtures, and the analysis of product formulations such as amorphous solid dispersions. It also includes a brief discussion of macromolecular (protein) 3D-ED for completeness. A key forward-looking argument is that 4D scanning electron diffraction (4D-SED) — which uses a nanometre-scale electron probe to create spatially resolved crystallographic maps — will become increasingly important as the next generation of drug modalities (nano-engineered medicines, long-acting injectables) require structural characterisation at the nanoscale. The review is guided by a systematic search of the Cambridge Structural Database and synthesises the literature on combined 3D-ED and 4D-SED as complementary tools for improving pharmaceutical product quality and patient outcomes.`
  },
];
