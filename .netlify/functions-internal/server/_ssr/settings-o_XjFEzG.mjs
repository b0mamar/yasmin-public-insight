import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell } from "./AppShell-IZbcf4XT.mjs";
import { u as useI18n, L as LANGS } from "./router-LT1YDNfL.mjs";
import "../_libs/seroval.mjs";
import { S as Settings, U as User, a as Archive, L as Layers, C as Check, M as Mail, B as Building2, X, b as Lock, c as Save, d as Search, e as Calendar, T as Trash2, f as ChevronRight, g as CreditCard, h as CircleQuestionMark, P as Phone } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./AppLogo-BHEYbuH1.mjs";
import "./server-CvNDXdWm.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const INITIAL_CAMPAIGNS_SHELL = [{
  id: "pre_loaded_1",
  name: "أصالة للقهوة المختصة (Asala Coffee Launch)",
  mode: "pre",
  userType: "org",
  date: "2026-06-20",
  budget: "1500",
  platforms: ["instagram", "tiktok"],
  dialect: "gulf",
  score: 92,
  status: "strong",
  engagementRate: 6.4
}, {
  id: "pre_loaded_2",
  name: "صحتك في حركتك (Your Health in Movement)",
  mode: "post",
  userType: "user",
  date: "2026-06-15",
  budget: "800",
  platforms: ["instagram"],
  dialect: "levantine",
  score: 78,
  status: "average",
  engagementRate: 4.2
}, {
  id: "pre_loaded_3",
  name: "متجر واحة التقنية (Ramadan Tech Offers)",
  mode: "post",
  userType: "org",
  date: "2026-06-08",
  budget: "3500",
  platforms: ["facebook", "instagram", "youtube"],
  dialect: "egyptian",
  score: 63,
  status: "average",
  engagementRate: 3.1
}, {
  id: "pre_loaded_4",
  name: "مبادرة تشجير الحي (Neighborhood Green Drive)",
  mode: "pre",
  userType: "user",
  date: "2026-05-24",
  budget: "300",
  platforms: ["facebook", "instagram"],
  dialect: "levantine",
  score: 81,
  status: "strong",
  engagementRate: 5.1
}];
function SettingsPage() {
  const {
    t,
    lang,
    setLang
  } = useI18n();
  const navigate = useNavigate();
  const ar = lang === "ar";
  const L = (en, arT) => ar ? arT : en;
  const [activeTab, setActiveTab] = reactExports.useState("profile");
  const [profileName, setProfileName] = reactExports.useState("Yasmine Ben Madani");
  const [profileEmail, setProfileEmail] = reactExports.useState("yasmineebenmadanii@gmail.com");
  const [profileAvatar, setProfileAvatar] = reactExports.useState("nebula");
  const [profileType, setProfileType] = reactExports.useState("user");
  const [isEditingProfile, setIsEditingProfile] = reactExports.useState(false);
  const [tempName, setTempName] = reactExports.useState(profileName);
  const [tempEmail, setTempEmail] = reactExports.useState(profileEmail);
  const [tempAvatar, setTempAvatar] = reactExports.useState(profileAvatar);
  const [tempType, setTempType] = reactExports.useState(profileType);
  const [userPassword, setUserPassword] = reactExports.useState("password123");
  const [currentPassword, setCurrentPassword] = reactExports.useState("");
  const [newPassword, setNewPassword] = reactExports.useState("");
  const [confirmNewPassword, setConfirmNewPassword] = reactExports.useState("");
  const [errorMsg, setErrorMsg] = reactExports.useState("");
  const [successMsg, setSuccessMsg] = reactExports.useState("");
  const [campaignsList, setCampaignsList] = reactExports.useState([]);
  const [archiveSearch, setArchiveSearch] = reactExports.useState("");
  const [archiveUserType, setArchiveUserType] = reactExports.useState("all");
  const [archiveMode, setArchiveMode] = reactExports.useState("all");
  const [archiveScore, setArchiveScore] = reactExports.useState("all");
  reactExports.useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      let initialName = "Yasmine Ben Madani";
      let initialEmail = "yasmineebenmadanii@gmail.com";
      let initialType = "user";
      const storedUserRaw = localStorage.getItem("pi-user");
      if (storedUserRaw) {
        try {
          const parsed = JSON.parse(storedUserRaw);
          if (parsed) {
            if (parsed.password) {
              setUserPassword(parsed.password);
            }
            if (parsed.email) {
              initialEmail = parsed.email;
            }
            if (parsed.mode) {
              initialType = parsed.mode;
            }
            if (parsed.firstName || parsed.lastName) {
              initialName = `${parsed.firstName || ""} ${parsed.lastName || ""}`.trim();
            } else if (parsed.orgName) {
              initialName = parsed.orgName;
            }
          }
        } catch (e) {
          console.error("Error parsing user data:", e);
        }
      }
      const storedName = localStorage.getItem("pi-profile-name") || initialName;
      const storedEmail = localStorage.getItem("pi-profile-email") || initialEmail;
      const storedAvatar = localStorage.getItem("pi-profile-avatar");
      const storedType = localStorage.getItem("pi-profile-type") || initialType;
      setProfileName(storedName);
      setTempName(storedName);
      setProfileEmail(storedEmail);
      setTempEmail(storedEmail);
      setProfileType(storedType);
      setTempType(storedType);
      if (storedAvatar) {
        setProfileAvatar(storedAvatar);
        setTempAvatar(storedAvatar);
      }
      const historyRaw = localStorage.getItem("pi-campaign-history");
      let loaded = [];
      try {
        loaded = historyRaw ? JSON.parse(historyRaw) : [];
      } catch (e) {
        loaded = [];
      }
      if (loaded.length === 0) {
        localStorage.setItem("pi-campaign-history", JSON.stringify(INITIAL_CAMPAIGNS_SHELL));
        setCampaignsList(INITIAL_CAMPAIGNS_SHELL);
      } else {
        setCampaignsList(loaded);
      }
    }
  }, [ar]);
  const saveProfile = () => {
    if (!tempName.trim()) {
      setErrorMsg(L("Name cannot be empty", "الاسم لا يمكن أن يكون فارغاً"));
      return;
    }
    if (!tempEmail.trim()) {
      setErrorMsg(L("Email cannot be empty", "البريد الإلكتروني لا يمكن أن يكون فارغاً"));
      return;
    }
    let updatedPassword = userPassword;
    if (newPassword || currentPassword || confirmNewPassword) {
      if (!currentPassword) {
        setErrorMsg(L("Please enter current password to make changes", "يرجى إدخال كلمة المرور الحالية لإجراء التغييرات"));
        return;
      }
      if (currentPassword !== userPassword) {
        setErrorMsg(L("Current password is incorrect", "كلمة المرور الحالية غير صحيحة"));
        return;
      }
      if (!newPassword) {
        setErrorMsg(L("Please enter new password", "يرجى إدخال كلمة المرور الجديدة"));
        return;
      }
      if (newPassword.length < 6) {
        setErrorMsg(L("New password must be at least 6 characters", "يجب أن تكون كلمة المرور الجديدة مكونة من 6 أحرف على الأقل"));
        return;
      }
      if (newPassword !== confirmNewPassword) {
        setErrorMsg(L("New passwords do not match", "كلمة المرور الجديدة غير متطابقة"));
        return;
      }
      updatedPassword = newPassword;
    }
    setProfileName(tempName);
    setProfileEmail(tempEmail);
    setProfileAvatar(tempAvatar);
    setProfileType(tempType);
    setUserPassword(updatedPassword);
    localStorage.setItem("pi-profile-name", tempName);
    localStorage.setItem("pi-profile-email", tempEmail);
    localStorage.setItem("pi-profile-avatar", tempAvatar);
    localStorage.setItem("pi-profile-type", tempType);
    const storedUserRaw = localStorage.getItem("pi-user");
    let userObj = {};
    if (storedUserRaw) {
      try {
        userObj = JSON.parse(storedUserRaw) || {};
      } catch (e) {
        userObj = {};
      }
    }
    userObj.email = tempEmail;
    userObj.password = updatedPassword;
    userObj.confirm = updatedPassword;
    userObj.mode = tempType;
    if (tempType === "user") {
      const parts = tempName.trim().split(/\s+/);
      userObj.firstName = parts[0] || "";
      userObj.lastName = parts.slice(1).join(" ") || "";
      delete userObj.orgName;
    } else {
      userObj.orgName = tempName;
      delete userObj.firstName;
      delete userObj.lastName;
    }
    localStorage.setItem("pi-user", JSON.stringify(userObj));
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setErrorMsg("");
    setSuccessMsg(L("Changes saved successfully!", "تم حفظ التغييرات بنجاح!"));
    setTimeout(() => {
      setSuccessMsg("");
    }, 4e3);
    setIsEditingProfile(false);
  };
  const cancelEditProfile = () => {
    setTempName(profileName);
    setTempEmail(profileEmail);
    setTempAvatar(profileAvatar);
    setTempType(profileType);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setErrorMsg("");
    setIsEditingProfile(false);
  };
  const handleDeleteCampaign = (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    const updated = campaignsList.filter((c) => c.id !== id);
    setCampaignsList(updated);
    localStorage.setItem("pi-campaign-history", JSON.stringify(updated));
    window.dispatchEvent(new Event("campaign-history-updated"));
  };
  const handleViewCampaign = (id) => {
    localStorage.setItem("pi-selected-campaign-id", id);
    sessionStorage.setItem("pi-current-run-id", id);
    window.dispatchEvent(new Event("selected-campaign-changed"));
    navigate({
      to: "/reports"
    });
  };
  const dialectNames = {
    standard: L("Standard Arabic (Fusha)", "العربية الفصحى"),
    algerian: L("Algerian Dialect", "اللهجة الجزائرية"),
    egyptian: L("Egyptian Dialect", "اللهجة المصرية"),
    gulf: L("Gulf Dialect", "اللهجة الخليجية"),
    levantine: L("Levantine Dialect", "اللهجة الشامية"),
    english: L("English", "الإنجليزية")
  };
  const filteredArchiveCampaigns = reactExports.useMemo(() => {
    return campaignsList.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(archiveSearch.toLowerCase()) || (c.dialect || "").toLowerCase().includes(archiveSearch.toLowerCase());
      const matchesUserType = archiveUserType === "all" ? true : c.userType === archiveUserType;
      const matchesMode = archiveMode === "all" ? true : c.mode === archiveMode;
      const matchesScore = archiveScore === "all" ? true : archiveScore === "excellent" ? c.score >= 80 : archiveScore === "average" ? c.score >= 60 && c.score < 80 : c.score < 60;
      return matchesSearch && matchesUserType && matchesMode && matchesScore;
    });
  }, [campaignsList, archiveSearch, archiveUserType, archiveMode, archiveScore]);
  const archiveStats = reactExports.useMemo(() => {
    const total = campaignsList.length;
    if (total === 0) {
      return {
        total,
        avgScore: 0,
        avgEngagement: "0.0"
      };
    }
    const sumScore = campaignsList.reduce((acc, c) => acc + c.score, 0);
    const sumEng = campaignsList.reduce((acc, c) => acc + (c.engagementRate || 0), 0);
    return {
      total,
      avgScore: Math.round(sumScore / total),
      avgEngagement: (sumEng / total).toFixed(1)
    };
  }, [campaignsList]);
  const getAvatarGradient = (theme) => {
    switch (theme) {
      case "nebula":
        return "bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]";
      case "solar":
        return "bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.4)]";
      case "emerald":
        return "bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]";
      case "cosmic":
      default:
        return "bg-gradient-to-tr from-slate-800 via-slate-700 to-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]";
    }
  };
  const getInitials = (fullName) => {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 0 || !parts[0]) return "??";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: t("settings"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6 text-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-8 w-8 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground", children: L("Settings & Account Center", "مركز الإعدادات والحساب") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: L("Manage your profiles, view campaign history, and update preferences.", "إدارة الملف الشخصي، عرض سجل الحملات، وتحديث الخيارات.") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-border mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("profile"), className: `px-5 py-3 text-sm font-semibold transition border-b-2 flex items-center gap-2 ${activeTab === "profile" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Profile & Security", "الملف الشخصي والأمان") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("campaigns"), className: `px-5 py-3 text-sm font-semibold transition border-b-2 flex items-center gap-2 ${activeTab === "campaigns" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Campaign History", "سجل الحملات") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("preferences"), className: `px-5 py-3 text-sm font-semibold transition border-b-2 flex items-center gap-2 ${activeTab === "preferences" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("App Preferences", "تفضيلات التطبيق") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      activeTab === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        successMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl p-3 text-start flex items-center gap-2 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 shrink-0 text-emerald-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: successMsg })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1 glass-card p-6 flex flex-col items-center justify-center text-center relative overflow-hidden h-fit", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -top-10 -left-10 w-24 h-24 rounded-full opacity-20 filter blur-xl pointer-events-none transition-all duration-500 ${profileAvatar === "nebula" ? "bg-purple-500" : profileAvatar === "solar" ? "bg-amber-500" : profileAvatar === "emerald" ? "bg-emerald-500" : "bg-blue-500"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-24 w-24 rounded-full flex items-center justify-center font-display font-extrabold text-2xl tracking-wider shrink-0 mb-4 transition-all duration-500 ${getAvatarGradient(profileAvatar)}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getInitials(profileName) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-1", children: profileName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full pt-4 border-t border-border/40 space-y-2 text-start text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: profileEmail })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: profileType === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5 text-blue-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 font-semibold", children: L("Individual Account", "حساب فردي") })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5 text-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400 font-semibold", children: L("Organization Account", "حساب مؤسسة") })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 glass-card p-6 text-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", children: L("Account Details", "تفاصيل الحساب") }),
            errorMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-destructive/15 border border-destructive/20 text-destructive text-xs rounded-xl p-3 text-start mb-4 flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 shrink-0 text-destructive mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: errorMsg })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-muted-foreground mb-2", children: L("Avatar Style", "مظهر الرمز التعبيري") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: ["nebula", "solar", "emerald", "cosmic"].map((theme) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setTempAvatar(theme), className: `h-12 rounded-xl relative overflow-hidden border transition-all duration-300 ${tempAvatar === theme ? "border-primary scale-105" : "border-border hover:border-muted-foreground"} ${getAvatarGradient(theme)}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-[10px] uppercase", children: theme }),
                  tempAvatar === theme && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-1 right-1 bg-primary text-primary-foreground p-0.5 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-2.5 w-2.5" }) })
                ] }, theme)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-muted-foreground mb-2", children: L("Account Type", "نوع الحساب") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setTempType("user"), className: `p-3 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 ${tempType === "user" ? "bg-blue-500/10 border-blue-500 text-blue-400" : "bg-surface-elevated border-border text-muted-foreground hover:text-foreground"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: L("Individual", "مستقل") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setTempType("org"), className: `p-3 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 ${tempType === "org" ? "bg-amber-500/10 border-amber-500 text-amber-400" : "bg-surface-elevated border-border text-muted-foreground hover:text-foreground"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: L("Organization", "منشأة/مؤسسة") })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-muted-foreground mb-1.5", children: L("Full Name", "الاسم الكامل") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: tempName, onChange: (e) => setTempName(e.target.value), className: "w-full bg-surface-elevated border border-border focus:border-primary/50 rounded-xl px-3 py-2 text-xs text-foreground focus:outline-none transition" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-muted-foreground mb-1.5", children: L("Email Address", "البريد الإلكتروني") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: tempEmail, onChange: (e) => setTempEmail(e.target.value), className: "w-full bg-surface-elevated border border-border focus:border-primary/50 rounded-xl px-3 py-2 text-xs text-foreground focus:outline-none transition" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border/40 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-bold text-primary mb-3 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Change Password", "تغيير كلمة المرور") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-muted-foreground mb-1.5", children: L("Current Password", "كلمة المرور الحالية") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: currentPassword, onChange: (e) => setCurrentPassword(e.target.value), placeholder: "••••••••", className: "w-full bg-surface-elevated border border-border focus:border-primary/50 rounded-xl px-3 py-2 text-xs text-foreground focus:outline-none transition" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-muted-foreground mb-1.5", children: L("New Password", "كلمة المرور الجديدة") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: newPassword, onChange: (e) => setNewPassword(e.target.value), placeholder: "••••••••", className: "w-full bg-surface-elevated border border-border focus:border-primary/50 rounded-xl px-3 py-2 text-xs text-foreground focus:outline-none transition" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-muted-foreground mb-1.5", children: L("Confirm Password", "تأكيد كلمة المرور") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: confirmNewPassword, onChange: (e) => setConfirmNewPassword(e.target.value), placeholder: "••••••••", className: "w-full bg-surface-elevated border border-border focus:border-primary/50 rounded-xl px-3 py-2 text-xs text-foreground focus:outline-none transition" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-2 italic", children: L("For guest accounts, the default password is 'password123'.", "للحسابات الافتراضية، كلمة المرور الحالية هي 'password123'.") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-4 border-t border-border/40 mt-4 justify-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: cancelEditProfile, className: "px-5 py-2.5 rounded-xl bg-surface-elevated hover:bg-surface border border-border text-xs text-muted-foreground hover:text-foreground font-semibold transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Cancel Changes", "إلغاء التغييرات") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: saveProfile, className: "px-6 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground font-bold text-xs transition flex items-center gap-1.5 shadow-lg shadow-primary/20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Save Changes", "حفظ التعديلات") })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      activeTab === "campaigns" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1", children: L("Total Campaigns", "إجمالي الحملات") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold text-foreground", children: archiveStats.total })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1", children: L("Average Readiness Score", "معدل نقاط الجاهزية") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-display font-bold text-primary", children: [
              archiveStats.avgScore,
              "/100"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1", children: L("Avg Engagement Rate", "متوسط نسبة التفاعل") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-display font-bold text-emerald-400", children: [
              archiveStats.avgEngagement,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex flex-col md:flex-row gap-4 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-1/3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute inset-y-0 ${ar ? "left-3" : "right-3"} flex items-center text-muted-foreground pointer-events-none`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: archiveSearch, onChange: (e) => setArchiveSearch(e.target.value), placeholder: L("Search campaign name or dialect...", "ابحث بالاسم أو اللهجة..."), className: "w-full text-xs bg-surface border border-border rounded-xl py-2 px-3 focus:outline-none focus:border-primary/50 text-foreground text-start" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 w-full md:w-auto text-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: archiveUserType, onChange: (e) => setArchiveUserType(e.target.value), className: "w-full text-xs bg-surface border border-border rounded-xl py-2 px-3 focus:outline-none text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: L("All Types", "كل الفئات") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "user", children: L("Individual", "فردي") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "org", children: L("Organization", "منشآت") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: archiveMode, onChange: (e) => setArchiveMode(e.target.value), className: "w-full text-xs bg-surface border border-border rounded-xl py-2 px-3 focus:outline-none text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: L("All Methods", "كل الطرق") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pre", children: L("Simulation", "محاكاة") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "post", children: L("Analytics", "تحليل") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: archiveScore, onChange: (e) => setArchiveScore(e.target.value), className: "w-full text-xs bg-surface border border-border rounded-xl py-2 px-3 focus:outline-none text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: L("All Scores", "كل النقاط") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "excellent", children: L("Excellent (80+)", "ممتاز (80+)") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "average", children: L("Average (60-80)", "متوسط (60-80)") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "weak", children: L("Weak (<60)", "ضعيف (<60)") })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filteredArchiveCampaigns.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 rounded-2xl bg-surface-elevated/20 border border-dashed border-border/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "h-10 w-10 mx-auto text-muted-foreground/30 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: L("No records found in campaign history.", "لم يتم العثور على سجلات للحملات.") })
        ] }) : filteredArchiveCampaigns.map((c) => {
          const isSuccess = c.score >= 80;
          const isAverage = c.score >= 60 && c.score < 80;
          const scoreColor = isSuccess ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" : isAverage ? "text-amber-400 bg-amber-500/10 border-amber-500/20" : "text-red-400 bg-red-500/10 border-red-500/20";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => handleViewCampaign(c.id), className: "group relative p-4 rounded-2xl bg-surface hover:bg-surface-elevated border border-border hover:border-primary/40 cursor-pointer transition-all duration-200 flex items-center justify-between text-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-12 w-12 rounded-xl border flex items-center justify-center font-bold text-sm ${scoreColor}`, children: c.score }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm text-foreground group-hover:text-primary transition", children: c.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground/80 mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
                    c.date
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.mode === "pre" ? L("Simulation Mode", "وضع المحاكاة") : L("Post-Campaign Analytics", "تحليل ما بعد الحملة") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/80", children: dialectNames[c.dialect] || c.dialect })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => handleDeleteCampaign(c.id, e), className: "p-2 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition duration-150 cursor-pointer", title: L("Delete Record", "حذف السجل"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-5 w-5 text-muted-foreground group-hover:text-primary transition-transform ${ar ? "rotate-180" : ""}` })
            ] })
          ] }, c.id);
        }) })
      ] }),
      activeTab === "preferences" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 text-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm uppercase font-bold text-muted-foreground tracking-wider mb-3", children: [
              "🌍 ",
              L("Language Settings", "إعدادات اللغة")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: LANGS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLang(l.code), className: `p-3 rounded-xl border text-sm flex items-center justify-center gap-2 transition ${lang === l.code ? "bg-primary/15 border-primary text-foreground font-semibold" : "bg-surface-elevated border-border text-muted-foreground hover:text-foreground"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.flag }),
              l.label
            ] }, l.code)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm uppercase font-bold text-muted-foreground tracking-wider mb-3", children: [
              "💳 ",
              L("Billing & Subscription", "الفواتير والاشتراكات")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/payment", className: "block p-4 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-xs text-foreground", children: L("Manage Payment Methods", "إدارة طرق الدفع") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: L("Update billing info, view invoices", "تحديث بيانات الدفع وفواتير الاشتراك") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-4 w-4 text-muted-foreground ${ar ? "rotate-180" : ""}` })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm uppercase font-bold text-muted-foreground tracking-wider mb-3", children: [
              "🛡️ ",
              L("Security & Privacy", "الأمان والخصوصية")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition cursor-pointer flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: L("Privacy Settings", "إعدادات الخصوصية") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-3.5 w-3.5 text-muted-foreground ${ar ? "rotate-180" : ""}` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition cursor-pointer flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: L("Device Management", "إدارة الأجهزة المتصلة") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-3.5 w-3.5 text-muted-foreground ${ar ? "rotate-180" : ""}` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-surface-elevated border border-border hover:bg-destructive/10 hover:border-destructive/30 transition cursor-pointer flex items-center justify-between text-destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: L("Delete Account Permanently", "حذف الحساب نهائياً") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-3.5 w-3.5 text-destructive/80 ${ar ? "rotate-180" : ""}` })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm uppercase font-bold text-muted-foreground tracking-wider mb-3", children: [
              "🆘 ",
              L("Help & Support", "المساعدة والدعم")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "block p-4 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-5 w-5 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-xs text-foreground", children: L("Help Center / FAQ", "مركز المساعدة والأسئلة الشائعة") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: L("Browse detailed guides & solutions", "تصفح أدلة الاستخدام والحلول") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-4 w-4 text-muted-foreground ${ar ? "rotate-180" : ""}` })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "block p-4 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-xs text-foreground", children: L("Contact Support Team", "التواصل مع فريق الدعم") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: L("Get personalized assistance from experts", "احصل على مساعدة مباشرة من خبرائنا") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-4 w-4 text-muted-foreground ${ar ? "rotate-180" : ""}` })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-2xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block mb-1", children: "Public Insight v1.2.0" }),
            L("Simulate and analyze campaign readiness for Middle Eastern audiences. Built with state-of-the-art AI technology.", "محاكاة وتحليل جاهزية الحملات للجمهور في الشرق الأوسط. تم التطوير باستخدام أحدث تقنيات الذكاء الاصطناعي.")
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  SettingsPage as component
};
