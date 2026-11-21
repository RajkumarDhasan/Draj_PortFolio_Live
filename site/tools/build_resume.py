"""Build the two-page public resume from confirmed portfolio facts.

Run with a Python environment containing reportlab. When this file is placed
in site/tools, the output goes to site/public/Rajkumar-Dhasan-Resume.pdf.
"""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


HERE = Path(__file__).resolve().parent
OUTPUT = (HERE.parent / "public" if HERE.name == "tools" else HERE) / "Rajkumar-Dhasan-Resume.pdf"
FONT_DIR = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("Segoe", str(FONT_DIR / "segoeui.ttf")))
pdfmetrics.registerFont(TTFont("Segoe-Bold", str(FONT_DIR / "segoeuib.ttf")))
pdfmetrics.registerFont(TTFont("Segoe-Light", str(FONT_DIR / "segoeuil.ttf")))
pdfmetrics.registerFontFamily("Segoe", normal="Segoe", bold="Segoe-Bold")

PAGE_W, PAGE_H = 595.28, 841.89
LEFT, RIGHT = 40, 555
BODY_W = RIGHT - LEFT
INK = colors.HexColor("#172033")
BODY = colors.HexColor("#29364B")
MUTED = colors.HexColor("#657083")
LINE = colors.HexColor("#D8DDE4")
CHIP = colors.HexColor("#F5F6F8")

pdf = canvas.Canvas(str(OUTPUT), pagesize=(PAGE_W, PAGE_H), pageCompression=1)
pdf.setTitle("Rajkumar Dhasan - UX/UI Product Designer Resume")
pdf.setAuthor("Rajkumar Dhasan")


def tracked(text, x, y, *, font="Segoe-Bold", size=10, color=INK, tracking=1.4):
    pdf.saveState()
    pdf.setFillColor(color)
    obj = pdf.beginText(x, y)
    obj.setFont(font, size)
    obj.setCharSpace(tracking)
    obj.textOut(text)
    pdf.drawText(obj)
    pdf.restoreState()


def centered_tracked(text, y, *, font="Segoe-Light", size=25, tracking=2.5, color=INK):
    width = pdfmetrics.stringWidth(text, font, size) + max(0, len(text) - 1) * tracking
    tracked(text, (PAGE_W - width) / 2, y, font=font, size=size, color=color, tracking=tracking)


def para(text, x, y, width, *, size=9.4, leading=13.7, color=BODY, font="Segoe", after=0):
    style = ParagraphStyle(
        "p", fontName=font, fontSize=size, leading=leading, textColor=color,
        splitLongWords=False, allowWidows=0, allowOrphans=0,
    )
    p = Paragraph(text, style)
    _, height = p.wrap(width, PAGE_H)
    p.drawOn(pdf, x, y - height)
    return y - height - after


def section(title, y, *, before=0, after=12):
    y -= before
    tracked(title.upper(), LEFT, y, size=10.3, tracking=1.8)
    return y - after


def bullet(text, x, y, width, *, after=4, size=9.4, leading=13.7):
    pdf.setFillColor(BODY)
    pdf.circle(x + 4, y - 6.2, 1.55, stroke=0, fill=1)
    return para(text, x + 15, y, width - 15, size=size, leading=leading, after=after)


def role(org, date, title, location, y, *, note=None, bullets=None):
    pdf.setFillColor(INK)
    pdf.setFont("Segoe-Bold", 10.2)
    pdf.drawString(LEFT, y, org)
    pdf.setFont("Segoe", 9.3)
    pdf.drawRightString(RIGHT, y, date)
    y -= 14
    pdf.setFillColor(MUTED)
    pdf.setFont("Segoe", 9.2)
    pdf.drawString(LEFT, y, f"{title}  |  {location}" if location else title)
    y -= 12
    if note:
        y = para(note, LEFT, y, BODY_W, size=9.2, leading=13.2, after=1)
    for item in bullets or []:
        y = bullet(item, LEFT, y, BODY_W, after=2, size=9.2, leading=13.2)
    return y - 10


def project(name, category, status, role_text, summary, bullets, y, *, bottom_gap=12):
    top = y + 7
    x = LEFT + 12
    width = BODY_W - 12
    pdf.setFillColor(INK)
    pdf.setFont("Segoe-Bold", 10.8)
    pdf.drawString(x, y, name)
    if category:
        label_x = x + pdfmetrics.stringWidth(name, "Segoe-Bold", 10.8) + 8
        pdf.setFont("Segoe", 9.4)
        pdf.drawString(label_x, y, f"- {category}")
    if status:
        pdf.setFont("Segoe-Bold", 7.6)
        pdf.setFillColor(MUTED)
        pdf.drawRightString(RIGHT, y + 0.5, status.upper())
    y -= 17
    y = para(role_text, x, y, width, size=9.4, leading=13.2, color=BODY, font="Segoe-Bold", after=4)
    y = para(summary, x, y, width, size=9.5, leading=14, color=MUTED, after=6)
    for item in bullets:
        y = bullet(item, x, y, width, after=4, size=9.5, leading=14)
    pdf.setStrokeColor(LINE)
    pdf.setLineWidth(0.65)
    pdf.line(LEFT, top, LEFT, y + 5)
    return y - bottom_gap


def skill_row(label, detail, y):
    pdf.setFillColor(INK)
    pdf.setFont("Segoe-Bold", 9.4)
    pdf.drawString(LEFT, y - 10, label)
    result = para(detail, LEFT + 126, y, BODY_W - 126, size=9.5, leading=14, after=0)
    return result - 12


# Page 1: identity, experience, and the most detailed case study.
centered_tracked("RAJKUMAR DHASAN", 791)
centered_tracked("UX/UI - PRODUCT DESIGNER", 767, font="Segoe", size=11.5, tracking=1.55)
pdf.setFont("Segoe", 9.3)
pdf.setFillColor(BODY)
contact_line = "+971 54 264 4838   |   drajkumar13@gmail.com   |   Abu Dhabi, UAE"
linkedin_line = "linkedin.com/in/draj-kumar"
pdf.drawCentredString(PAGE_W / 2, 745, contact_line)
pdf.drawCentredString(PAGE_W / 2, 729, linkedin_line)
contact_x = (PAGE_W - pdfmetrics.stringWidth(contact_line, "Segoe", 9.3)) / 2
email_prefix = contact_line.split("drajkumar13@gmail.com")[0]
email_x = contact_x + pdfmetrics.stringWidth(email_prefix, "Segoe", 9.3)
email_w = pdfmetrics.stringWidth("drajkumar13@gmail.com", "Segoe", 9.3)
pdf.linkURL("mailto:drajkumar13@gmail.com", (email_x, 741, email_x + email_w, 755), relative=0)
linkedin_w = pdfmetrics.stringWidth(linkedin_line, "Segoe", 9.3)
pdf.linkURL("https://www.linkedin.com/in/draj-kumar", ((PAGE_W - linkedin_w) / 2, 725, (PAGE_W + linkedin_w) / 2, 739), relative=0)
pdf.setStrokeColor(LINE)
pdf.setLineWidth(1)
pdf.line(LEFT, 711, RIGHT, 711)

y = section("Profile", 687, after=14)
y = para(
    "UX/UI and Product Designer with 6+ years of experience designing digital products for the UAE market across "
    "mobility, e-commerce, and food and beverage. Sole designer at Kief Consultancies &amp; Technologies, working "
    "from stakeholder discussion and competitor benchmarking through information architecture, high-fidelity UI, "
    "token-based design systems, and developer-ready Figma files. I focus on complex service journeys, pricing and "
    "recovery states, and bilingual Arabic/English interfaces with correct RTL/LTR behaviour. A hands-on background "
    "in HTML and CSS helps me keep design decisions buildable.",
    LEFT, y, BODY_W, size=9.5, leading=14, after=10,
)

chips = ["PRODUCT DESIGN", "MOBILE UX", "DESIGN SYSTEMS", "PROTOTYPING", "ARABIC RTL / ENGLISH LTR", "FIGMA"]
cx, cy = LEFT, y
for label in chips:
    tw = pdfmetrics.stringWidth(label, "Segoe-Bold", 7.7)
    bw = tw + 18
    if cx + bw > RIGHT:
        cx = LEFT
        cy -= 24
    pdf.setFillColor(CHIP)
    pdf.roundRect(cx, cy - 12, bw, 18, 5, stroke=0, fill=1)
    pdf.setFillColor(BODY)
    pdf.setFont("Segoe-Bold", 7.7)
    pdf.drawString(cx + 9, cy - 6, label)
    cx += bw + 7
y = cy - 34

y = section("Employment history", y, after=15)
y = role(
    "Kief Consultancies & Technologies", "May 2024 - present", "Senior UI/UX Designer - Sole designer", "Abu Dhabi, UAE", y,
    bullets=[
        "Sole designer on Taggo and TheEvents, covering task flows, wireframes, high-fidelity mobile UI, interactive prototypes, and developer-facing Figma files.",
        "Built project-specific design systems with variables, reusable components, and state variants for mobility and commerce journeys.",
        "Documented decisions and edge cases so pricing, cancellation, checkout, and recovery behaviour is visible before implementation.",
    ],
)
y = role("Hubble Web Technologies", "Dec 2022 - Dec 2023", "UI/UX Designer", "Dubai, UAE", y)
y = role("BitsnPixs", "Feb 2019 - Jun 2022", "UI/UX Designer", "", y)

y = section("Key projects", y - 2, after=17)
y = project(
    "Taggo", "Mobility", "iOS and Android", "UX/UI designer - customer and driver app journeys",
    "A multi-service mobility product covering rides, rental, cargo and recovery, with journeys for customers and drivers.",
    [
        "Reviewed competitor patterns and discussed service needs with stakeholders; used these inputs to shape testable design choices.",
        "Placed vehicle choice, fixed fare and payment method together before the booking commitment; kept destination entry and primary actions within thumb reach.",
        "Designed cancellation review for fee and no-fee cases, showing the reason and amount before the rider confirms.",
        "Mapped recovery states that pause the job for customer approval when the estimate changes, including waiting and failure paths.",
        "Designed the driver's view of the job: service eligibility, a clear offer card and a reasoned price-change request.",
        "Supported the flows with light/dark Figma variables, reusable components and stateful prototypes.",
        "Extended the same interaction language into cargo, rental, wallet, and account screens.",
    ],
    y, bottom_gap=0,
)
if y < 35:
    raise RuntimeError(f"Page 1 content overflowed: y={y:.1f}")
pdf.showPage()

# Page 2: the other two product stories, practice, and education.
y = 797
y = project(
    "TheEvents", "Commerce", "iOS and Android", "Product designer - buyer, promoter and vendor journeys",
    "A shopping product connecting buyers, vendors and makeup artists who promote products.",
    [
        "Designed buyer discovery through checkout: search, curated collections, product details, cart, payment and confirmation.",
        "Connected each artist's look to the products used, with a direct path to shop those items.",
        "Structured vendor registration as seven steps and explored the vendor dashboard in wireframes.",
        "Developed final screens and reusable button, payment-row and product-card patterns from the Figma component library.",
    ],
    y,
)
y = project(
    "Noma", "Food ordering", "Ready to launch", "UX/UI designer - English and Arabic interfaces",
    "A coffee-ordering product designed in English and Arabic, with launch-ready flows and components.",
    [
        "Designed a drink builder that reflects ingredient choices in the cup illustration, recipe and running price.",
        "Mapped the ordering path from menu and customisation through cart, pickup, payment and order states.",
        "Built left-to-right and right-to-left selector variants so layout, steppers and directional icons follow the reading direction.",
        "Created state variants for errors and recovery, alongside a variable-driven prototype in Figma.",
    ],
    y, bottom_gap=5,
)

y = section("Skills", y, before=3, after=18)
y = skill_row("Product & UX design", "Information architecture, task flows, journey mapping, wireframing, interaction design, mobile-first UI, prototyping, and UX documentation.", y)
y = skill_row("UI & design systems", "Figma variables, component libraries, state variants, light/dark modes, typography, visual hierarchy, and micro-interactions.", y)
y = skill_row("Research & evaluation", "Stakeholder discussion, competitor benchmarking, heuristic review, evidence synthesis, and clear plans for unvalidated usability questions.", y)
y = skill_row("Localisation & access", "English LTR and Arabic RTL layouts, directional components, mirrored navigation, touch targets, and colour-contrast review.", y)
y = skill_row("Collaboration", "Stakeholder presentations, developer handoff, design documentation, design QA, and cross-functional feedback.", y)
y = skill_row("Tools", "Figma (Auto Layout, Variables, Components, Prototyping, Dev Mode), FigJam, Claude, HTML, and CSS.", y)
y = skill_row("Principles", "HCI and UX heuristics, Apple Human Interface Guidelines, and Material Design patterns.", y)

y = section("How I work", y - 1, after=15)
y = bullet("Identify who is making each decision and show the price, consequence or next step before asking them to commit.", LEFT, y, BODY_W, after=5, size=9.5, leading=14)
y = bullet("Map the main path together with cancellations, failures, waiting and recovery states before polishing the interface.", LEFT, y, BODY_W, after=5, size=9.5, leading=14)
y = bullet("Separate documented evidence from assumptions and use prototypes to expose questions for future validation.", LEFT, y, BODY_W, after=3, size=9.5, leading=14)

y = section("Education", y, before=18, after=17)
pdf.setFillColor(INK)
pdf.setFont("Segoe-Bold", 9.7)
pdf.drawString(LEFT, y, "MBA - Bharathiyar University")
y -= 18
pdf.setFont("Segoe-Bold", 9.7)
pdf.drawString(LEFT, y, "BCA, Computer Applications - MS University")
y -= 14

if y < 35:
    raise RuntimeError(f"Page 2 content overflowed: y={y:.1f}")

pdf.save()
print(OUTPUT)
