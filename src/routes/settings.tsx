import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import {
  User,
  Briefcase,
  Mail,
  Edit3,
  Save,
  Camera,
  Check,
  X,
  Building2,
  Archive,
  Trash2,
  ChevronRight,
  Calendar,
  Search,
  Lock,
  HelpCircle,
  Phone,
  CreditCard,
  Settings,
  Shield,
  Layers,
} from "lucide-react";
import { useState, useEffect, useMemo, type ReactNode } from "react";
import { useI18n, LANGS } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_CAMPAIGNS_SHELL = [
  {
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
    engagementRate: 6.4,
  },
  {
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
    engagementRate: 4.2,
  },
  {
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
    engagementRate: 3.1,
  },
  {
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
    engagementRate: 5.1,
  },
];

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Public Insight" }] }),
  component: SettingsPage,
});

type TabType = "profile" | "campaigns" | "preferences";

function SettingsPage() {
  const { t, lang, setLang } = useI18n();
  const navigate = useNavigate();
  const ar = lang === "ar";
  const L = (en: string, arT: string) => (ar ? arT : en);

  const [activeTab, setActiveTab] = useState<TabType>("profile");

  // User Profile state
  const [profileName, setProfileName] = useState("Yasmine Ben Madani");
  const [profileEmail, setProfileEmail] = useState("yasmineebenmadanii@gmail.com");

  const [profileAvatar, setProfileAvatar] = useState("nebula");
  const [profileType, setProfileType] = useState<"user" | "org">("user");
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [tempName, setTempName] = useState(profileName);
  const [tempEmail, setTempEmail] = useState(profileEmail);

  const [tempAvatar, setTempAvatar] = useState(profileAvatar);
  const [tempType, setTempType] = useState<"user" | "org">(profileType);

  // Password & Verification state
  const [userPassword, setUserPassword] = useState("password123");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Campaigns history state
  const [campaignsList, setCampaignsList] = useState<any[]>([]);
  const [archiveSearch, setArchiveSearch] = useState("");
  const [archiveUserType, setArchiveUserType] = useState<"all" | "user" | "org">("all");
  const [archiveMode, setArchiveMode] = useState<"all" | "pre" | "post">("all");
  const [archiveScore, setArchiveScore] = useState<"all" | "excellent" | "average" | "weak">("all");

  // Load profile details and campaign history on mount
  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      let initialName = "Yasmine Ben Madani";
      let initialEmail = "yasmineebenmadanii@gmail.com";
      let initialType: "user" | "org" = "user";

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
      const storedType = (localStorage.getItem("pi-profile-type") as "user" | "org") || initialType;

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

      // Load Campaign History
      const historyRaw = localStorage.getItem("pi-campaign-history");
      let loaded: any[] = [];
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

    // Password modification logic
    let updatedPassword = userPassword;
    if (newPassword || currentPassword || confirmNewPassword) {
      if (!currentPassword) {
        setErrorMsg(
          L(
            "Please enter current password to make changes",
            "يرجى إدخال كلمة المرور الحالية لإجراء التغييرات",
          ),
        );
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
        setErrorMsg(
          L(
            "New password must be at least 6 characters",
            "يجب أن تكون كلمة المرور الجديدة مكونة من 6 أحرف على الأقل",
          ),
        );
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

    // Sync to pi-user in localstorage
    const storedUserRaw = localStorage.getItem("pi-user");
    let userObj: any = {};
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

    // Clear password fields & show success
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setErrorMsg("");
    setSuccessMsg(L("Changes saved successfully!", "تم حفظ التغييرات بنجاح!"));

    setTimeout(() => {
      setSuccessMsg("");
    }, 4000);

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

  const handleDeleteCampaign = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const updated = campaignsList.filter((c) => c.id !== id);
    setCampaignsList(updated);
    localStorage.setItem("pi-campaign-history", JSON.stringify(updated));
    window.dispatchEvent(new Event("campaign-history-updated"));
  };

  const handleViewCampaign = (id: string) => {
    localStorage.setItem("pi-selected-campaign-id", id);
    sessionStorage.setItem("pi-current-run-id", id);
    window.dispatchEvent(new Event("selected-campaign-changed"));
    navigate({ to: "/reports" });
  };

  const dialectNames: Record<string, string> = {
    standard: L("Standard Arabic (Fusha)", "العربية الفصحى"),
    algerian: L("Algerian Dialect", "اللهجة الجزائرية"),
    egyptian: L("Egyptian Dialect", "اللهجة المصرية"),
    gulf: L("Gulf Dialect", "اللهجة الخليجية"),
    levantine: L("Levantine Dialect", "اللهجة الشامية"),
    english: L("English", "الإنجليزية"),
  };

  const filteredArchiveCampaigns = useMemo(() => {
    return campaignsList.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(archiveSearch.toLowerCase()) ||
        (c.dialect || "").toLowerCase().includes(archiveSearch.toLowerCase());

      const matchesUserType = archiveUserType === "all" ? true : c.userType === archiveUserType;

      const matchesMode = archiveMode === "all" ? true : c.mode === archiveMode;

      const matchesScore =
        archiveScore === "all"
          ? true
          : archiveScore === "excellent"
            ? c.score >= 80
            : archiveScore === "average"
              ? c.score >= 60 && c.score < 80
              : c.score < 60;

      return matchesSearch && matchesUserType && matchesMode && matchesScore;
    });
  }, [campaignsList, archiveSearch, archiveUserType, archiveMode, archiveScore]);

  const archiveStats = useMemo(() => {
    const total = campaignsList.length;
    if (total === 0) {
      return { total, avgScore: 0, avgEngagement: "0.0" };
    }
    const sumScore = campaignsList.reduce((acc, c) => acc + c.score, 0);
    const sumEng = campaignsList.reduce((acc, c) => acc + (c.engagementRate || 0), 0);
    return {
      total,
      avgScore: Math.round(sumScore / total),
      avgEngagement: (sumEng / total).toFixed(1),
    };
  }, [campaignsList]);

  const getAvatarGradient = (theme: string) => {
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

  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 0 || !parts[0]) return "??";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <AppShell title={t("settings")}>
      <div className="max-w-4xl mx-auto py-4">
        {/* Title */}
        <div className="flex items-center gap-3 mb-6 text-start">
          <Settings className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">
              {L("Settings & Account Center", "مركز الإعدادات والحساب")}
            </h1>
            <p className="text-xs text-muted-foreground">
              {L("Manage your profiles, view campaign history, and update preferences.", "إدارة الملف الشخصي، عرض سجل الحملات، وتحديث الخيارات.")}
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-border mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-5 py-3 text-sm font-semibold transition border-b-2 flex items-center gap-2 ${
              activeTab === "profile"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <User className="h-4 w-4" />
            <span>{L("Profile & Security", "الملف الشخصي والأمان")}</span>
          </button>
          <button
            onClick={() => setActiveTab("campaigns")}
            className={`px-5 py-3 text-sm font-semibold transition border-b-2 flex items-center gap-2 ${
              activeTab === "campaigns"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Archive className="h-4 w-4" />
            <span>{L("Campaign History", "سجل الحملات")}</span>
          </button>
          <button
            onClick={() => setActiveTab("preferences")}
            className={`px-5 py-3 text-sm font-semibold transition border-b-2 flex items-center gap-2 ${
              activeTab === "preferences"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>{L("App Preferences", "تفضيلات التطبيق")}</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div>
          {/* PROFILE & SECURITY TAB */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              {successMsg && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl p-3 text-start flex items-center gap-2 animate-fade-in">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{successMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Profile Card Summary */}
                <div className="md:col-span-1 glass-card p-6 flex flex-col items-center justify-center text-center relative overflow-hidden h-fit">
                  <div
                    className={`absolute -top-10 -left-10 w-24 h-24 rounded-full opacity-20 filter blur-xl pointer-events-none transition-all duration-500 ${
                      profileAvatar === "nebula"
                        ? "bg-purple-500"
                        : profileAvatar === "solar"
                          ? "bg-amber-500"
                          : profileAvatar === "emerald"
                            ? "bg-emerald-500"
                            : "bg-blue-500"
                    }`}
                  />
                  <div className={`h-24 w-24 rounded-full flex items-center justify-center font-display font-extrabold text-2xl tracking-wider shrink-0 mb-4 transition-all duration-500 ${getAvatarGradient(profileAvatar)}`}>
                    <span>{getInitials(profileName)}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">{profileName}</h3>

                  
                  <div className="w-full pt-4 border-t border-border/40 space-y-2 text-start text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5" />
                      <span className="truncate">{profileEmail}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {profileType === "user" ? (
                        <>
                          <User className="h-3.5 w-3.5 text-blue-400" />
                          <span className="text-blue-400 font-semibold">{L("Individual Account", "حساب فردي")}</span>
                        </>
                      ) : (
                        <>
                          <Building2 className="h-3.5 w-3.5 text-amber-400" />
                          <span className="text-amber-400 font-semibold">{L("Organization Account", "حساب مؤسسة")}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Edit Fields */}
                <div className="md:col-span-2 glass-card p-6 text-start">
                  <h3 className="text-lg font-bold mb-4">{L("Account Details", "تفاصيل الحساب")}</h3>
                  
                  {errorMsg && (
                    <div className="bg-destructive/15 border border-destructive/20 text-destructive text-xs rounded-xl p-3 text-start mb-4 flex items-start gap-2">
                      <X className="h-4 w-4 shrink-0 text-destructive mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Avatar Theme Selector */}
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground mb-2">
                        {L("Avatar Style", "مظهر الرمز التعبيري")}
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {(["nebula", "solar", "emerald", "cosmic"] as const).map((theme) => (
                          <button
                            key={theme}
                            type="button"
                            onClick={() => setTempAvatar(theme)}
                            className={`h-12 rounded-xl relative overflow-hidden border transition-all duration-300 ${
                              tempAvatar === theme
                                ? "border-primary scale-105"
                                : "border-border hover:border-muted-foreground"
                            } ${getAvatarGradient(theme)}`}
                          >
                            <span className="font-display font-bold text-[10px] uppercase">
                              {theme}
                            </span>
                            {tempAvatar === theme && (
                              <span className="absolute bottom-1 right-1 bg-primary text-primary-foreground p-0.5 rounded-full">
                                <Check className="h-2.5 w-2.5" />
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Account Type Selector */}
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground mb-2">
                        {L("Account Type", "نوع الحساب")}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setTempType("user")}
                          className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 ${
                            tempType === "user"
                              ? "bg-blue-500/10 border-blue-500 text-blue-400"
                              : "bg-surface-elevated border-border text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <User className="h-4 w-4" />
                          <span className="text-xs font-semibold">{L("Individual", "مستقل")}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setTempType("org")}
                          className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 ${
                            tempType === "org"
                              ? "bg-amber-500/10 border-amber-500 text-amber-400"
                              : "bg-surface-elevated border-border text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Building2 className="h-4 w-4" />
                          <span className="text-xs font-semibold">{L("Organization", "منشأة/مؤسسة")}</span>
                        </button>
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                          {L("Full Name", "الاسم الكامل")}
                        </label>
                        <input
                          type="text"
                          value={tempName}
                          onChange={(e) => setTempName(e.target.value)}
                          className="w-full bg-surface-elevated border border-border focus:border-primary/50 rounded-xl px-3 py-2 text-xs text-foreground focus:outline-none transition"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                          {L("Email Address", "البريد الإلكتروني")}
                        </label>
                        <input
                          type="email"
                          value={tempEmail}
                          onChange={(e) => setTempEmail(e.target.value)}
                          className="w-full bg-surface-elevated border border-border focus:border-primary/50 rounded-xl px-3 py-2 text-xs text-foreground focus:outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Security & Password Section */}
                    <div className="pt-4 border-t border-border/40 mt-4">
                      <h4 className="text-sm font-bold text-primary mb-3 flex items-center gap-1.5">
                        <Lock className="h-4 w-4" />
                        <span>{L("Change Password", "تغيير كلمة المرور")}</span>
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                            {L("Current Password", "كلمة المرور الحالية")}
                          </label>
                          <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-surface-elevated border border-border focus:border-primary/50 rounded-xl px-3 py-2 text-xs text-foreground focus:outline-none transition"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                            {L("New Password", "كلمة المرور الجديدة")}
                          </label>
                          <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-surface-elevated border border-border focus:border-primary/50 rounded-xl px-3 py-2 text-xs text-foreground focus:outline-none transition"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                            {L("Confirm Password", "تأكيد كلمة المرور")}
                          </label>
                          <input
                            type="password"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-surface-elevated border border-border focus:border-primary/50 rounded-xl px-3 py-2 text-xs text-foreground focus:outline-none transition"
                          />
                        </div>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-2 italic">
                        {L("For guest accounts, the default password is 'password123'.", "للحسابات الافتراضية، كلمة المرور الحالية هي 'password123'.")}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border/40 mt-4 justify-end">
                      <button
                        type="button"
                        onClick={cancelEditProfile}
                        className="px-5 py-2.5 rounded-xl bg-surface-elevated hover:bg-surface border border-border text-xs text-muted-foreground hover:text-foreground font-semibold transition"
                      >
                        <span>{L("Cancel Changes", "إلغاء التغييرات")}</span>
                      </button>
                      <button
                        type="button"
                        onClick={saveProfile}
                        className="px-6 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground font-bold text-xs transition flex items-center gap-1.5 shadow-lg shadow-primary/20"
                      >
                        <Save className="h-4 w-4" />
                        <span>{L("Save Changes", "حفظ التعديلات")}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CAMPAIGN HISTORY TAB */}
          {activeTab === "campaigns" && (
            <div className="space-y-6">
              {/* Bento Grid Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-start">
                <div className="glass-card p-5">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                    {L("Total Campaigns", "إجمالي الحملات")}
                  </div>
                  <div className="text-3xl font-display font-bold text-foreground">
                    {archiveStats.total}
                  </div>
                </div>

                <div className="glass-card p-5">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                    {L("Average Readiness Score", "معدل نقاط الجاهزية")}
                  </div>
                  <div className="text-3xl font-display font-bold text-primary">
                    {archiveStats.avgScore}/100
                  </div>
                </div>

                <div className="glass-card p-5">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                    {L("Avg Engagement Rate", "متوسط نسبة التفاعل")}
                  </div>
                  <div className="text-3xl font-display font-bold text-emerald-400">
                    {archiveStats.avgEngagement}%
                  </div>
                </div>
              </div>

              {/* Filters Panel */}
              <div className="glass-card p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative w-full md:w-1/3">
                  <span className={`absolute inset-y-0 ${ar ? "left-3" : "right-3"} flex items-center text-muted-foreground pointer-events-none`}>
                    <Search className="h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    value={archiveSearch}
                    onChange={(e) => setArchiveSearch(e.target.value)}
                    placeholder={L("Search campaign name or dialect...", "ابحث بالاسم أو اللهجة...")}
                    className="w-full text-xs bg-surface border border-border rounded-xl py-2 px-3 focus:outline-none focus:border-primary/50 text-foreground text-start"
                  />
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-3 gap-2 w-full md:w-auto text-start">
                  <div>
                    <select
                      value={archiveUserType}
                      onChange={(e) => setArchiveUserType(e.target.value as any)}
                      className="w-full text-xs bg-surface border border-border rounded-xl py-2 px-3 focus:outline-none text-foreground"
                    >
                      <option value="all">{L("All Types", "كل الفئات")}</option>
                      <option value="user">{L("Individual", "فردي")}</option>
                      <option value="org">{L("Organization", "منشآت")}</option>
                    </select>
                  </div>

                  <div>
                    <select
                      value={archiveMode}
                      onChange={(e) => setArchiveMode(e.target.value as any)}
                      className="w-full text-xs bg-surface border border-border rounded-xl py-2 px-3 focus:outline-none text-foreground"
                    >
                      <option value="all">{L("All Methods", "كل الطرق")}</option>
                      <option value="pre">{L("Simulation", "محاكاة")}</option>
                      <option value="post">{L("Analytics", "تحليل")}</option>
                    </select>
                  </div>

                  <div>
                    <select
                      value={archiveScore}
                      onChange={(e) => setArchiveScore(e.target.value as any)}
                      className="w-full text-xs bg-surface border border-border rounded-xl py-2 px-3 focus:outline-none text-foreground"
                    >
                      <option value="all">{L("All Scores", "كل النقاط")}</option>
                      <option value="excellent">{L("Excellent (80+)", "ممتاز (80+)")}</option>
                      <option value="average">{L("Average (60-80)", "متوسط (60-80)")}</option>
                      <option value="weak">{L("Weak (<60)", "ضعيف (<60)")}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Campaigns List */}
              <div className="space-y-3">
                {filteredArchiveCampaigns.length === 0 ? (
                  <div className="text-center py-12 rounded-2xl bg-surface-elevated/20 border border-dashed border-border/80">
                    <Archive className="h-10 w-10 mx-auto text-muted-foreground/30 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {L("No records found in campaign history.", "لم يتم العثور على سجلات للحملات.")}
                    </p>
                  </div>
                ) : (
                  filteredArchiveCampaigns.map((c) => {
                    const isSuccess = c.score >= 80;
                    const isAverage = c.score >= 60 && c.score < 80;
                    const scoreColor = isSuccess
                      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                      : isAverage
                        ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                        : "text-red-400 bg-red-500/10 border-red-500/20";

                    return (
                      <div
                        key={c.id}
                        onClick={() => handleViewCampaign(c.id)}
                        className="group relative p-4 rounded-2xl bg-surface hover:bg-surface-elevated border border-border hover:border-primary/40 cursor-pointer transition-all duration-200 flex items-center justify-between text-start"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`h-12 w-12 rounded-xl border flex items-center justify-center font-bold text-sm ${scoreColor}`}>
                            {c.score}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition">
                              {c.name}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground/80 mt-1">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {c.date}
                              </span>
                              <span>•</span>
                              <span>
                                {c.mode === "pre"
                                  ? L("Simulation Mode", "وضع المحاكاة")
                                  : L("Post-Campaign Analytics", "تحليل ما بعد الحملة")}
                              </span>
                              <span>•</span>
                              <span className="font-medium text-foreground/80">
                                {dialectNames[c.dialect] || c.dialect}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => handleDeleteCampaign(c.id, e)}
                            className="p-2 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition duration-150 cursor-pointer"
                            title={L("Delete Record", "حذف السجل")}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                          <ChevronRight className={`h-5 w-5 text-muted-foreground group-hover:text-primary transition-transform ${ar ? "rotate-180" : ""}`} />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* APP PREFERENCES TAB */}
          {activeTab === "preferences" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
              {/* App Settings */}
              <div className="glass-card p-6 space-y-6">
                <div>
                  <h3 className="text-sm uppercase font-bold text-muted-foreground tracking-wider mb-3">
                    🌍 {L("Language Settings", "إعدادات اللغة")}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {LANGS.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        className={`p-3 rounded-xl border text-sm flex items-center justify-center gap-2 transition ${
                          lang === l.code
                            ? "bg-primary/15 border-primary text-foreground font-semibold"
                            : "bg-surface-elevated border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span>{l.flag}</span>
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm uppercase font-bold text-muted-foreground tracking-wider mb-3">
                    💳 {L("Billing & Subscription", "الفواتير والاشتراكات")}
                  </h3>
                  <Link to="/payment" className="block p-4 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-semibold text-xs text-foreground">
                            {L("Manage Payment Methods", "إدارة طرق الدفع")}
                          </div>
                          <div className="text-[10px] text-muted-foreground mt-0.5">
                            {L("Update billing info, view invoices", "تحديث بيانات الدفع وفواتير الاشتراك")}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className={`h-4 w-4 text-muted-foreground ${ar ? "rotate-180" : ""}`} />
                    </div>
                  </Link>
                </div>

                <div>
                  <h3 className="text-sm uppercase font-bold text-muted-foreground tracking-wider mb-3">
                    🛡️ {L("Security & Privacy", "الأمان والخصوصية")}
                  </h3>
                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition cursor-pointer flex items-center justify-between">
                      <span className="text-xs font-semibold">{L("Privacy Settings", "إعدادات الخصوصية")}</span>
                      <ChevronRight className={`h-3.5 w-3.5 text-muted-foreground ${ar ? "rotate-180" : ""}`} />
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition cursor-pointer flex items-center justify-between">
                      <span className="text-xs font-semibold">{L("Device Management", "إدارة الأجهزة المتصلة")}</span>
                      <ChevronRight className={`h-3.5 w-3.5 text-muted-foreground ${ar ? "rotate-180" : ""}`} />
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface-elevated border border-border hover:bg-destructive/10 hover:border-destructive/30 transition cursor-pointer flex items-center justify-between text-destructive">
                      <span className="text-xs font-semibold">{L("Delete Account Permanently", "حذف الحساب نهائياً")}</span>
                      <ChevronRight className={`h-3.5 w-3.5 text-destructive/80 ${ar ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Help & Support */}
              <div className="glass-card p-6 space-y-6">
                <div>
                  <h3 className="text-sm uppercase font-bold text-muted-foreground tracking-wider mb-3">
                    🆘 {L("Help & Support", "المساعدة والدعم")}
                  </h3>
                  <div className="space-y-3">
                    <Link to="/faq" className="block p-4 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-semibold text-xs text-foreground">
                              {L("Help Center / FAQ", "مركز المساعدة والأسئلة الشائعة")}
                            </div>
                            <div className="text-[10px] text-muted-foreground mt-0.5">
                              {L("Browse detailed guides & solutions", "تصفح أدلة الاستخدام والحلول")}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className={`h-4 w-4 text-muted-foreground ${ar ? "rotate-180" : ""}`} />
                      </div>
                    </Link>

                    <Link to="/contact" className="block p-4 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-semibold text-xs text-foreground">
                              {L("Contact Support Team", "التواصل مع فريق الدعم")}
                            </div>
                            <div className="text-[10px] text-muted-foreground mt-0.5">
                              {L("Get personalized assistance from experts", "احصل على مساعدة مباشرة من خبرائنا")}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className={`h-4 w-4 text-muted-foreground ${ar ? "rotate-180" : ""}`} />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground block mb-1">
                    Public Insight v1.2.0
                  </span>
                  {L("Simulate and analyze campaign readiness for Middle Eastern audiences. Built with state-of-the-art AI technology.", "محاكاة وتحليل جاهزية الحملات للجمهور في الشرق الأوسط. تم التطوير باستخدام أحدث تقنيات الذكاء الاصطناعي.")}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
